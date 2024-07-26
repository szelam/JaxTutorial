import { getDateSupposedIndex } from "./timeHelpers";

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

  let newBlockedTimeSlots = new Set();

  const closedDays = [0, 1, 2, 3, 4, 5, 6, 7].filter(
    (day) => !newPolicy.openingDays.includes(day)
  );

  /* ------- Handle blocked days ------ */

  // Add any time of a closed day into blocked periods to prevent selecting across closed days
  closedDays.forEach((day) => {
    // for today to 2 days later (inclusive), if the supposedindex is one of the close days, add the time of 12:00 of the day into newBlockedTimeSlots
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 2);

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
        newBlockedTimeSlots.add(blockedDate);
      }
    }
  });

  /* - Handle availability of parking - */

  // Add time slots inside a "blocked" period (xx:00, :15, :30 & :45) as blocked.
  bookedPeriods.forEach((period) => {
    const startDate = new Date(period.startDate);
    const endDate = new Date(period.endDate);

    // Create a map to count occurrences of each time slot
    const slotCounts = new Map();

    // Iterate through all booked periods
    bookedPeriods.forEach((p) => {
      const pStart = new Date(p.startDate);
      const pEnd = new Date(p.endDate);

      // Check each 15-minute slot within the period
      for (
        let time = new Date(startDate);
        time < endDate;
        time.setMinutes(time.getMinutes() + 15)
      ) {
        if (time >= pStart && time < pEnd) {
          const hktTime = new Date(time.getTime() - 8 * 60 * 60 * 1000); // use HKT timezone
          const timeString = hktTime.toISOString();
          slotCounts.set(timeString, (slotCounts.get(timeString) || 0) + 1);
        }
      }
    });

    // Add slots that meet or exceed the quota to newBlockedTimeSlots
    for (let [timeSlot, count] of slotCounts) {
      if (count >= quota) {
        newBlockedTimeSlots.add(timeSlot);
      }
    }
  });

  return { newPolicy, newBlockedTimeSlots };
}
