import { useEffect, useState } from "react";
import BaseViewModel from "../../Helpers/BaseViewModel";
import {
  getAvailability,
  getBookedPeriods,
  getHolidays,
  getServicePlan,
} from "../../api/time";
import { DEFAULT_POLICY } from "../../constants/time";
// import {
//   BOOKED_PERIODS,
//   HOLIDAYS,
//   POLICY_PLANS,
//   SERVICE_PLAN,
// } from "../../constants/timeTestData";
import { useAuth } from "../../providers/AuthProvider";
import { getScrollContainer, scrollToToday } from "../../utils/scrollHelpers";
import { processData } from "../../utils/timeDataHelpers";
import {
  getDateSupposedIndex,
  getDisplayDays,
  getMonthsData,
  getTimeAsNumberOfMinutes,
  getTimeSlots,
  getTodayDate,
  getYear,
  to24Hours,
  toDateObj,
} from "../../utils/timeHelpers";

function useTime() {
  /* ------------- states ------------- */
  const { token } = useAuth();

  const [loading, setLoading] = useState(true);
  const [baseItem, setBaseItem] = useState({
    displayDays: getDisplayDays(),
    timeSlots: getTimeSlots(),
    today: getTodayDate(),
    months: getMonthsData(),
    year: getYear(),
  });
  const [viewMonth, setViewMonth] = useState(baseItem.months.textList[1]);
  const [viewDate, setViewDate] = useState(null);
  const [blockedTimeSlots, setBlockedTimeSlots] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState({
    startDate: null,
    endDate: null,
  });
  const [policy, setPolicy] = useState();

  /* ---------------------------------- */
  /*              Funtions              */
  /* ---------------------------------- */

  async function fetchData() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);

    let newPolicy = DEFAULT_POLICY;
    let newBlockedTimeSlots = [];

    setLoading(true);
    try {
      const [holiday, servicePlan, policyPlans, bookedPeriods] =
        await Promise.all([
          getHolidays(token),
          getServicePlan(token),
          getAvailability(token),
          getBookedPeriods(
            token,
            new Date().toISOString(),
            endDate.toISOString()
          ),
        ]);
      ({ newPolicy, newBlockedTimeSlots } = processData(
        holiday,
        policyPlans,
        servicePlan[0].quota,
        bookedPeriods
      ));
      // ({ newPolicy, newBlockedTimeSlots } = processData(
      //   HOLIDAYS,
      //   POLICY_PLANS,
      //   SERVICE_PLAN[0].quota,
      //   BOOKED_PERIODS
      // ));
    } catch (error) {
      alert(error);
    } finally {
      setPolicy(newPolicy);
      setBlockedTimeSlots(newBlockedTimeSlots);
      setLoading(false);
    }
  }

  // inactive: cannot be selected due to hourly policy or booking
  // blocked: cannot be selected due to min / max time
  function getTimeState(timeSlot) {
    const { startDate: selectedStart, endDate: selectedEnd } = selectedPeriod;

    const activePeriods =
      policy.byDay[getDateSupposedIndex(policy.publicHolidays, viewDate)];

    const slotTime = toDateObj(viewDate, timeSlot);
    const timeSlot24 = to24Hours(timeSlot);

    // The index of period where of activePeriods where timeSlot lies on.
    // activePeriods has .from and .to (00:00 - 23:59). (timeSlot24 [minute, hour] )
    // returns -1 if not found
    const belongingPeriod = activePeriods.findIndex((period) => {
      const periodStart = getTimeAsNumberOfMinutes(period.from);
      const periodEnd = getTimeAsNumberOfMinutes(period.to);
      const slotTimeInMinutes = getTimeAsNumberOfMinutes(timeSlot24);

      return slotTimeInMinutes >= periodStart && slotTimeInMinutes <= periodEnd;
    });

    const { bookMinHours, bookMaxHours } = selectedStart
      ? belongingPeriod >= 0
        ? policy.byDay[
            getDateSupposedIndex(policy.publicHolidays, selectedStart.getDate())
          ][belongingPeriod]
        : {
            bookMinHours: null,
            bookMaxHours: null,
          }
      : { bookMinHours: null, bookMaxHours: null };

    /* ---------- Handle policy --------- */

    if (blockedTimeSlots.includes(slotTime.toISOString())) {
      return "inactive";
    }

    const slotTimeMs = slotTime.getTime();
    const startTimeMs = selectedStart?.getTime();
    const endTimeMs = selectedEnd?.getTime();

    /* ---------- Handle selected state --------- */

    if (slotTimeMs === startTimeMs) {
      return selectedEnd ? "start" : "startLonely";
    }

    if (slotTimeMs === endTimeMs) {
      return "end";
    }

    if (
      startTimeMs &&
      endTimeMs &&
      slotTimeMs > startTimeMs &&
      slotTimeMs < endTimeMs
    ) {
      return "both";
    }

    if (startTimeMs && slotTimeMs > startTimeMs) {
      /* -------- Handle min / max -------- */
      // When there is start time, time slots where the time is X multiple of bookMinHours away from start will be "no". Otherwise, slots will be "blocked".
      // Additionally, time slots a distance bookMaxHourss * bookMinHours away from start will also be "blocked".
      const timeDiff = Math.abs(slotTimeMs - startTimeMs);
      const minuteDiff = Math.floor(timeDiff / (60 * 1000));

      if (minuteDiff % (bookMinHours * 60) !== 0) {
        return "blocked";
      }

      if (bookMaxHours && minuteDiff > bookMaxHours * 60) {
        return "blocked";
      }

      /* ----- Handle blocked periods ----- */
      // Check if any BP lies in the interval selectedStart and slotTime
      for (const blockedDateISO of blockedTimeSlots) {
        const blockedDate = new Date(blockedDateISO);
        if (blockedDate >= selectedStart && blockedDate <= slotTime) {
          return "blocked";
        }
      }
    }
    if (startTimeMs && slotTimeMs < startTimeMs) {
      return "blocked";
    }

    return "no";
  }

  function getDateState(item) {
    const { date, type } = item;

    if (type === "inactive") return "inactive";

    const dateOfItemIndex = getDateSupposedIndex(policy.publicHolidays, date);
    if (!policy.openingDays.includes(dateOfItemIndex)) return "inactive";

    const { startDate: selectedStart, endDate: selectedEnd } = selectedPeriod;

    if (selectedStart && selectedEnd) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const checkDate = new Date(currentYear, currentMonth, date);
      const startDay = selectedStart.getDate();
      const endDay = selectedEnd.getDate();

      if (checkDate.getDate() >= startDay && checkDate.getDate() <= endDay) {
        return "selected";
      }
    }
    if (date === viewDate) {
      return "focused";
    }
  }

  /* ---------------------------------- */
  /*              handlers              */
  /* ---------------------------------- */

  function handleToToday() {
    scrollToToday(
      baseItem.today,
      baseItem.months.list[0],
      baseItem.months.list
    );
  }

  function handleClear() {
    setSelectedPeriod({
      startDate: null,
      endDate: null,
    });
  }

  function handleSelectDate(state, date) {
    if (state === "inactive") {
      return;
    }
    console.log(`Set view date to ${date}`);
    setViewDate(date);
  }

  function handleSelectPeriod(timeSlot, state) {
    const slotTime = toDateObj(viewDate, timeSlot);
    if (
      (!selectedPeriod.startDate && !selectedPeriod.endDate) ||
      state === "blocked"
    ) {
      console.log("Setting initial start date");
      setSelectedPeriod({
        startDate: slotTime,
        endDate: null,
      });
    } else if (
      slotTime > selectedPeriod.startDate &&
      slotTime <= selectedPeriod.endDate
    ) {
      console.log("Resetting start date within existing range");
      setSelectedPeriod({
        startDate: slotTime,
        endDate: null,
      });
    } else if (slotTime < selectedPeriod.startDate) {
      console.log("Setting new start date before existing start date");
      setSelectedPeriod({
        startDate: slotTime,
        endDate: null,
      });
    } else if (slotTime > selectedPeriod.startDate) {
      console.log("Setting end date");
      setSelectedPeriod((prev) => ({
        ...prev,
        endDate: slotTime,
      }));
    } else {
      setSelectedPeriod((prev) => ({
        startDate: null,
        endDate: null,
      }));
    }
  }

  /* ---------------------------------- */
  /*              useEffect             */
  /* ---------------------------------- */

  function handleScroll(scrollContainer, breakpoints) {
    const scrollLeft = scrollContainer.scrollLeft;
    if (scrollLeft < breakpoints[0]) {
      setViewMonth(baseItem.months.textList[0]);
    } else if (scrollLeft < breakpoints[1]) {
      setViewMonth(baseItem.months.textList[1]);
    } else {
      setViewMonth(baseItem.months.textList[2]);
    }
  }

  useEffect(() => {
    const initializeData = async () => {
      await fetchData();

      /* ------- Dynamic day display ------ */

      const { scrollContainer, breakpoints } = getScrollContainer();
      if (!scrollContainer) return;
      const handleScrollWrapper = () =>
        handleScroll(scrollContainer, breakpoints, setViewMonth, baseItem);
      scrollContainer.addEventListener("scroll", handleScrollWrapper);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScrollWrapper);
      };
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (!loading) handleToToday();
  }, [loading]);

  /* ------------- return ------------- */

  return {
    handleToToday,
    handleClear,
    handleSelectDate,
    handleSelectPeriod,
    getDateState,
    getTimeState,
    loading,
    policy,
    viewDate,
    baseItem,
    viewMonth,
    selectedPeriod,
    blockedTimeSlots,
  };
}

const TimeViewModel = BaseViewModel(useTime);

export default TimeViewModel;
