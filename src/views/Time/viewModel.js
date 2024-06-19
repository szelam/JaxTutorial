import { useEffect, useState } from "react";
import BaseViewModel from "../../Helpers/BaseViewModel";

function useTime() {
  const [dayItem, setDayItem] = useState(getDayItem());
  const [timeItem, setTimeItem] = useState(getTimeItem());
  const [dates, setDates] = useState(getDates());
  const [viewMonth, setViewMonth] = useState(dates.months[1]);
  const [day, setDay] = useState(getDates().today);
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
      const dotw = getDotw(d);

      // Determine the status
      let type = "inactive";
      const diffInDays = Math.floor((d - today) / (1000 * 60 * 60 * 24));
      if (diffInDays === 0) {
        type = "today";
      } else if (diffInDays > 0 && diffInDays <= 2) {
        type = "active";
      }

      result.push({ day, dotw, type });
    }

    return result;
  }

  function getTimeItem() {
    const generateTimeSlots = (isPM) => {
      const times = [];
      for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const formattedHour = hour === 0 ? 12 : hour;
          const formattedMinute = minute < 10 ? `0${minute}` : minute;
          times.push(`${formattedHour}:${formattedMinute}`);
        }
      }
      if (isPM) {
        return times.map((time) =>
          time
            .replace(/^12/, "12")
            .replace(/^(\d{1,2})/, (match) =>
              (parseInt(match, 10) + 12).toString()
            )
        );
      }
      return times;
    };

    return {
      AM: generateTimeSlots(false),
      PM: generateTimeSlots(true),
    };
  }

  function getDates() {
    const today = new Date();
    const todayDate = today.getDate();
    const month = today.toLocaleString("default", { month: "short" });
    const lastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    ).toLocaleString("default", { month: "short" });
    const nextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      1
    ).toLocaleString("default", { month: "short" });
    const year = today.getFullYear();
    return { today: todayDate, months: [lastMonth, month, nextMonth], year };
  }

  function scrollToToday() {
    const { scrollContainer, breakpoint1 } = getScrollContainer();
    scrollContainer.scrollLeft = breakpoint1 + 8 + (59 + 16) * (day - 1);
  }

  function handleScroll(scrollContainer, breakpoint1, breakpoint2) {
    const scrollLeft = scrollContainer.scrollLeft;
    if (scrollLeft < breakpoint1) {
      setViewMonth(dates.months[0]);
    } else if (scrollLeft < breakpoint2) {
      setViewMonth(dates.months[1]);
    } else {
      setViewMonth(dates.months[2]);
    }
  }

  function handleToToday() {
    scrollToToday();
  }

  function handleClear() {
    console.log("clear");
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
    return { scrollContainer, breakpoint1, breakpoint2 };
  }

  useEffect(() => {
    scrollToToday();
    const { scrollContainer, breakpoint1, breakpoint2 } = getScrollContainer();

    scrollContainer.addEventListener("scroll", () =>
      handleScroll(scrollContainer, breakpoint1, breakpoint2)
    );

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    handleToToday,
    handleClear,
    handleSelectDay,
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
