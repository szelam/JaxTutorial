import {
  getDateSupposedIndex,
  getTimeAsNumberOfMinutes,
  getTimeSlots,
  to24Hours,
  toDateObj,
} from "./timeHelpers";

export function processData(holidays, policyPlans, quota, bookedPeriods) {
  const today = new Date();

  const activePolicyPlan = policyPlans.find((plan) => {
    const fromDate = new Date(plan.PolicyPlan.availablePeriod.from);
    const toDate = new Date(plan.PolicyPlan.availablePeriod.to);
    return today >= fromDate && today <= toDate;
  });

  activePolicyPlan
    ? console.log("Relevant policy plan:", activePolicyPlan)
    : console.log("No relevant policy plan found");

  const { HourlyPolicies: hourlyPolicies } = activePolicyPlan.PolicyPlan;

  /* ---------------------------------- */
  /*               POLICY               */
  /* ---------------------------------- */

  let byDay = {};
  for (let i = 0; i <= 7; i++) {
    byDay[i] = [];
  }

  hourlyPolicies.forEach((hPolicy) => {
    byDay[parseInt(hPolicy.weekday)].push({
      from: hPolicy.from,
      to: hPolicy.to,
      bookMinHours: hPolicy.min,
      bookMaxHours: hPolicy.max,
    });
  });

  const newPolicy = {
    publicHolidays: holidays
      .filter(
        (h) => new Date(h.date).getFullYear() === new Date().getFullYear()
      )
      .map((h) => new Date(h.date)),
    openingDays:
      activePolicyPlan?.PolicyPlan?.openingDays.map((day) => parseInt(day)) ||
      [],
    byDay,
  };

  /* ---------------------------------- */
  /*           BLOCKED PERIODS          */
  /* ---------------------------------- */

  let blockedTimeSlots = [];

  const closedDays = [0, 1, 2, 3, 4, 5, 6, 7].filter(
    (day) => !newPolicy.openingDays.includes(day)
  );

  /* ------- Handle blocked days ------ */

  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 2);

  // Add any time of a closed day into blocked periods to prevent selecting across closed days
  closedDays.forEach((day) => {
    // for today to 2 days later (inclusive), if the supposedindex is one of the close days, add the time of 12:00 of the day into blockedTimeSlots

    for (
      let date = new Date(today);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const supposedIndex = getDateSupposedIndex(
        newPolicy.publicHolidays,
        date.getDate()
      );
      if (closedDays.includes(supposedIndex)) {
        const blockedDate = new Date(date);
        blockedDate.setHours(12, 0, 0, 0);
        blockedTimeSlots.push(blockedDate);
      }
    }
  });

  /* - Handle availability of parking - */

  const timeOffset = 8 * 60 * 60 * 1000;

  const slotCounts = [];
  // Considering time periods (xx:00, :15, :30 & :45), find all intersection and their counts and store into slotCounts [{time, count}]
  bookedPeriods.forEach((period) => {
    const start = new Date(period.startDate);
    const end = new Date(period.endDate);

    for (
      let time = new Date(start);
      time < end;
      time.setMinutes(time.getMinutes() + 15)
    ) {
      const slotTime = new Date(time);
      slotTime.setSeconds(0, 0); // Normalize to exact 15-minute intervals

      const existingSlot = slotCounts.find(
        (slot) => slot.time.getTime() === slotTime.getTime()
      );
      if (existingSlot) {
        existingSlot.count++;
      } else {
        slotCounts.push({ time: slotTime, count: 1 });
      }
    }
  });

  // Add slots that meet or exceed the quota to blockedTimeslots
  for (let i = 0; i < slotCounts.length; i++) {
    if (slotCounts[i].count >= quota) {
      blockedTimeSlots.push(
        new Date(slotCounts[i].time.getTime() - timeOffset)
      );
    }
  }

  /* ----- Handle out of from & to ---- */

  const timeSlots = getTimeSlots();
  const possibleSlots = [];

  for (
    let date = new Date(today);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const index = getDateSupposedIndex(newPolicy.publicHolidays, null, date);
    if (closedDays.includes(index)) {
      continue;
    }
    const activePeriods = newPolicy.byDay[index];

    [...timeSlots.AM, ...timeSlots.PM].forEach((timeSlot) => {
      const timeSlot24 = to24Hours(timeSlot);
      const slotTime = toDateObj(date.getDate(), timeSlot);
      const belongingPeriod = activePeriods.findIndex((period) => {
        const periodStart = getTimeAsNumberOfMinutes(period.from);
        const periodEnd = getTimeAsNumberOfMinutes(period.to);
        const slotTimeInMinutes = getTimeAsNumberOfMinutes(timeSlot24);

        return (
          slotTimeInMinutes >= periodStart && slotTimeInMinutes <= periodEnd
        );
      });

      if (belongingPeriod < 0) {
        blockedTimeSlots.push(slotTime);
      } else {
        possibleSlots.push({ index, slotTime, belongingPeriod });
      }
    });
  }

  /* ------ Handle residue of gap ----- */
  // Disable timeslot of there are no possible bookings at that slot. We can check by fast-forwarding minhours and see if the slot is disabled.
  possibleSlots
    .sort((a, b) => a.slotTime - b.slotTime)
    .forEach((slot) => {
      const minHours =
        newPolicy.byDay[slot.index][slot.belongingPeriod].bookMinHours;
      const slotTime = slot.slotTime;

      const fastForwardedSlot = new Date(slotTime);
      fastForwardedSlot.setMinutes(
        fastForwardedSlot.getMinutes() + minHours * 60
      );
      const backTrackSlot = new Date(slotTime);
      backTrackSlot.setMinutes(backTrackSlot.getMinutes() - minHours * 60);

      let isBlocked = false;
      let fastCheckTime = new Date(fastForwardedSlot);
      let backCheckTime = new Date(backTrackSlot);
      for (
        ;
        fastCheckTime > slotTime;
        fastCheckTime.setMinutes(fastCheckTime.getMinutes() - 15),
          backCheckTime.setMinutes(backCheckTime.getMinutes() + 15)
      ) {
        console.log(fastCheckTime, backCheckTime);
        if (
          blockedTimeSlots.some(
            (blockedSlot) => blockedSlot.getTime() === fastCheckTime.getTime()
          ) &&
          blockedTimeSlots.some(
            (blockedSlot) => blockedSlot.getTime() === backCheckTime.getTime()
          )
        ) {
          isBlocked = true;
          break;
        }
      }
      if (isBlocked) {
        blockedTimeSlots.push(slotTime);
      }
    });

  /* ------------- Export ------------- */
  const newBlockedTimeSlots = blockedTimeSlots
    .map((time) => {
      return time.toISOString();
    })
    .sort((a, b) => new Date(a) - new Date(b));

  return { newPolicy, newBlockedTimeSlots };
}
