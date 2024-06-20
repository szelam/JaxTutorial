import { useEffect, useState } from "react";
import BaseViewModel from "../../Helpers/BaseViewModel";

function useTime() {
  const [dayItem, setDayItem] = useState(getDayItem());
  const [timeItem, setTimeItem] = useState(getTimeItem());
  const [dates, setDates] = useState(getDates());
  const [viewMonth, setViewMonth] = useState(dates.months.textList[1]);
  const [day, setDay] = useState({
    date: dates.today,
    month: dates.months.list[1],
  });
  const [time, setTime] = useState({
    AM: { from: null, to: null },
    PM: { from: null, to: null },
  });

  function getDayItem() {
    const result = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Clear the time part for accurate comparison

    // Calculate the start of the last month
    const startOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    );

    // Calculate the end of the next month
    const endOfNextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 2,
      0
    );

    // Helper function to get day of the week as a string
    const getDotw = (date) => {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysOfWeek[date.getDay()];
    };

    // Iterate from the start of last month to the end of next month
    for (
      let d = new Date(startOfLastMonth);
      d <= endOfNextMonth;
      d.setDate(d.getDate() + 1)
    ) {
      const day = d.getDate();
      const month = d.getMonth();
      const dotw = getDotw(d);

      // Determine the status
      let type = "inactive";
      const diffInDays = Math.floor((d - today) / (1000 * 60 * 60 * 24));
      if (diffInDays === 0) {
        type = "today";
      } else if (diffInDays > 0 && diffInDays <= 2) {
        type = "active";
      }

      result.push({ day, month, dotw, type });
    }

    return result;
  }

  function getTimeItem() {
    const times = [];
    for (let hour = 0; hour < 12; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour;
        const formattedMinute = minute < 10 ? `0${minute}` : minute;
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  }

  function getDates() {
    const today = new Date();
    const todayDate = today.getDate();
    const months = [
      today.getMonth() - 1,
      today.getMonth(),
      today.getMonth() + 1,
    ];
    const monthsObj = {
      list: months,
      textList: months.map((month) => {
        const date = new Date(today.getFullYear(), month, 1);
        return date.toLocaleString("default", { month: "short" });
      }, []),
    };
    const year = today.getFullYear();

    return { today: todayDate, months: monthsObj, year: year };
  }

  function scrollToToday() {
    const { scrollContainer, breakpoints } = getScrollContainer();
    const breakpoint =
      day.month + 1 - dates.months.list[dates.months.list.length - 1];
    scrollContainer.scrollLeft =
      breakpoints[breakpoint] + 8 + (59 + 16) * (day.date - 1);
  }

  function handleScroll(scrollContainer, breakpoints) {
    const scrollLeft = scrollContainer.scrollLeft;
    if (scrollLeft < breakpoints[0]) {
      setViewMonth(dates.months.textList[0]);
    } else if (scrollLeft < breakpoints[1]) {
      setViewMonth(dates.months.textList[1]);
    } else {
      setViewMonth(dates.months.textList[2]);
    }
  }

  function handleToToday() {
    scrollToToday();
  }

  function handleClear() {
    setTime({
      AM: { from: null, to: null },
      PM: { from: null, to: null },
    });
  }

  function handleSelectDay(type) {
    if (type === "inactive") {
      return;
    }
  }

  function getScrollContainer() {
    const scrollContainer = document.getElementById("scrollContainer");

    const totalWidth = scrollContainer.scrollWidth;
    console.log("Total content width:", totalWidth);
    const breakpoint1 = totalWidth / 3;
    const breakpoint2 = (totalWidth / 3) * 2;
    return { scrollContainer, breakpoints: [breakpoint1, breakpoint2] };
  }

  function handleSelectTime(item, ap) {
    const newTime = { ...time };
    const newTimeAP = newTime[ap];
    if (!newTimeAP.from && !newTimeAP.to) {
      newTimeAP.from = item;
    } else if (newTimeAP.from && !newTimeAP.to) {
      if (
        Number(newTimeAP.from.replace(":", "")) < Number(item.replace(":", ""))
      ) {
        newTimeAP.to = item;
      } else {
        newTimeAP.to = newTimeAP.from;
        newTimeAP.from = item;
      }
    } else {
      newTimeAP.from = item;
      newTimeAP.to = null;
    }
    setTime(newTime);
  }

  function compareTime(time, item) {
    if (!time.from && !time.to) {
      return "no";
    }
    if (time.from === item && time.to === null) {
      return "startLonely";
    } else if (time.from === item && time.to !== null) {
      return "start";
    } else if (time.to === item) {
      return "end";
    }
    if (time.from && time.to) {
      const nTimeFrom = Number(time.from.replace(":", ""));
      const nTimeTo = Number(time.to.replace(":", ""));
      const nItem = Number(item.replace(":", ""));
      if (nItem > nTimeFrom && nItem < nTimeTo) {
        return "both";
      }
    }
    return "no";
  }

  useEffect(() => {
    scrollToToday();
    const { scrollContainer, breakpoints } = getScrollContainer();

    scrollContainer.addEventListener("scroll", () =>
      handleScroll(scrollContainer, breakpoints)
    );

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    handleToToday,
    handleClear,
    handleSelectDay,
    handleSelectTime,
    compareTime,
    dayItem,
    timeItem,
    dates,
    viewMonth,
    day,
    time,
  };
}

const TimeViewModel = BaseViewModel(useTime);

export default TimeViewModel;
