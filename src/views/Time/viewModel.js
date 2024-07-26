import { useEffect, useState } from "react";
import BaseViewModel from "../../Helpers/BaseViewModel";
import {
  getAvailability,
  getBookedPeriods,
  getHolidays,
  getPolicyPlan,
  getServicePlan,
} from "../../api/time";
import { DEFAULT_POLICY } from "../../constants/time";
import { useAuth } from "../../providers/AuthProvider";
import { getScrollContainer, scrollToToday } from "../../utils/scrollHelpers";
import { processData } from "../../utils/timeDataHelpers";
import {
  getDateSupposedIndex,
  getDisplayDays,
  getMonthsData,
  getTimeSlots,
  getTodayDate,
  getYear,
  isTimeInPeriod,
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
  const [storeBlockedPeriods, setStoreBlockedPeriods] = useState(new Set());
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

    setLoading(true);
    try {
      const [holiday, servicePlan, availability, bookedPeriods] =
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

      newPolicy.publicHolidays = holiday.map((h) => h.date);
      const { PolicyPlans, quota } = servicePlan[0];
      const populatedPolicyPlans = await Promise.all(
        PolicyPlans.map((p) => getPolicyPlan(token, p.PolicyPlan))
      );
      newPolicy = processData(
        holiday,
        populatedPolicyPlans,
        quota,
        availability,
        bookedPeriods
      );
    } catch (error) {
      console.error(error);
    } finally {
      setPolicy(newPolicy);
      setLoading(false);
    }
  }

  /**
   * Gets the selected state for a given time slot based on the policy.
   * @param {Object} timeSlot - The time slot object containing the time string and period.
   * @returns {string} The selected state ("inactive", "no", "startLonely", "start", "end", "both").
   */

  // inactive: cannot be selected due to hourly policy
  // blocked: cannot be selected due to min / max time
  function getTimeState(timeSlot) {
    const { startDate: selectedStart, endDate: selectedEnd } = selectedPeriod;

    // Note: we can active periods for the current date, but bookTimeUnit & bookMaxUnit is get by the start date of selected period
    const activePeriods =
      policy.byDay[getDateSupposedIndex(policy.publicHolidays, viewDate)];

    const slotTime = toDateObj(viewDate, timeSlot);

    const { bookTimeUnit, bookMaxUnit } = selectedStart
      ? policy.byDay[
          getDateSupposedIndex(policy.publicHolidays, selectedStart.getDate())
        ].find((p) => isTimeInPeriod(slotTime, p, viewDate)) || {
          bookTimeUnit: null,
          bookMaxUnit: null,
        }
      : { bookTimeUnit: null, bookMaxUnit: null };

    /* ---------- Handle policy --------- */

    const isActive = activePeriods.some((period) =>
      isTimeInPeriod(slotTime, period, slotTime)
    );

    if (!isActive) {
      storeBlockedPeriods.add(slotTime);
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
      // When there is start time, time slots where the time is X multiple of bookTimeUnit away from start will be "no". Otherwise, slots will be "blocked".
      // Additionally, time slots a distance bookMaxUnits * bookTimeUnit away from start will also be "blocked".
      const timeDiff = Math.abs(slotTimeMs - startTimeMs);
      const minuteDiff = Math.floor(timeDiff / (bookTimeUnit * 1000));

      if (minuteDiff % bookTimeUnit !== 0) {
        return "blocked";
      }

      if (bookMaxUnit && minuteDiff > bookMaxUnit * bookTimeUnit) {
        return "blocked";
      }

      /* ----- Handle blocked periods ----- */
      // Check if any BP lies in the interval selectedStart and slotTime
      for (const blockedDate of storeBlockedPeriods) {
        if (blockedDate >= selectedStart && blockedDate <= slotTime) {
          return "blocked";
        }
      }
    }

    return "no";
  }

  function getDateState(item) {
    const { date, type } = item;

    if (type === "inactive") return "inactive";

    const dateOfItemIndex = getDateSupposedIndex(policy.publicHolidays, date);
    console.log(
      date,
      dateOfItemIndex,
      policy.openingDays,
      !policy.openingDays.includes(dateOfItemIndex)
    );
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

  function handleSelectDate(type, date) {
    if (type === "inactive") {
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
  };
}

const TimeViewModel = BaseViewModel(useTime);

export default TimeViewModel;
