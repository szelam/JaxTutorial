/**
 * Generates an array of day items for a three-month period.
 * @returns {Array<Object>} An array of day objects, each containing:
 *   - date {number}: The day of the month (1-31)
 *   - month {number}: The month (0-11, where 0 is January)
 *   - dotw {string}: Day of the week abbreviation (e.g., "Sun", "Mon")
 *   - type {string}: The status of the day ("inactive", "today", or "active")
 */

export function getDisplayDays() {
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
  const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);

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
    const date = d.getDate();
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

    result.push({ date, month, dotw, type });
  }

  return result;
}

/**
 * Generates an array of time items for a 12-hour period.
 * @returns {Object} An object containing two arrays:
 *   - AM {Array<Object>}: Time items for the AM period
 *   - PM {Array<Object>}: Time items for the PM period
 */
export function getTimeSlots() {
  const times = {
    AM: [],
    PM: [],
  };
  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour;
      const formattedMinute = minute < 10 ? `0${minute}` : minute;
      times.AM.push({
        str: `${formattedHour}:${formattedMinute}`,
        period: "AM",
      });
      times.PM.push({
        str: `${formattedHour == 0 ? 12 : formattedHour}:${formattedMinute}`,
        period: "PM",
      });
    }
  }
  return times;
}

export function getTodayDate() {
  const today = new Date().getDate();
  return today; // returns 1-31
}

export function getMonthsData() {
  const today = new Date();
  const months = [today.getMonth() - 1, today.getMonth(), today.getMonth() + 1];
  const monthsData = {
    list: months,
    textList: months.map((month) => {
      const date = new Date(today.getFullYear(), month, 1);
      return date.toLocaleString("default", { month: "short" });
    }, []),
  };
  return monthsData;

  // example: {
  //   list: [0, 1, 2],
  //   textList: ["Jan", "Feb", "Mar"],
  // }
}

export function getYear() {
  const today = new Date();
  return today.getFullYear();
}

export function getDateSupposedIndex(publicHolidays, date) {
  const today = new Date();
  const convertedDate = new Date(today.getFullYear(), today.getMonth(), date);
  if (
    publicHolidays.some(
      (holiday) => holiday.toDateString() === convertedDate.toDateString()
    )
  ) {
    return 7;
  }
  return convertedDate.getDay() === 0 ? 6 : convertedDate.getDay() - 1;
}

export function toDateObj(date, timeSlot) {
  const [hour, minute] = to24Hours(timeSlot);
  const slotTime = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    date,
    hour,
    minute
  );
  return slotTime;
}
export function to24Hours(timeSlot) {
  const split = timeSlot.str.split(":");
  const hourInt = parseInt(split[0]);
  const hour = hourInt + (timeSlot.period === "PM" && hourInt < 12 ? 12 : 0);
  const minute = parseInt(split[1]);

  return [hour, minute];
}

export function getTimeAsNumberOfMinutes(time) {
  let timeParts;
  if (!Array.isArray(time)) {
    timeParts = time.split(":").map(Number);
  } else {
    timeParts = time;
  }
  const timeInMinutes = timeParts[0] * 60 + timeParts[1];
  return timeInMinutes;
}
