import React, { useEffect, useState } from "react";
import MaterialInput from "../../components/MaterialInput";

export default function Test() {
  const [state, setState] = useState();
  const [dateRange, setDateRange] = useState();

  function getDayRange(day, halfDay, renewDay) {
    if (isNaN(day)) return NaN;

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfNextMonth = new Date(
      currentYear,
      currentMonth + 2,
      0
    ).getDate();

    if (day > lastDayOfMonth || day === 0) return false;

    if (day <= halfDay) {
      return [
        {
          start: new Date(currentYear, currentMonth, 1),
          end: new Date(currentYear, currentMonth, lastDayOfMonth),
        },
      ];
    } else if (day > halfDay && day <= renewDay) {
      return [
        {
          start: new Date(currentYear, currentMonth, halfDay + 1),
          end: new Date(currentYear, currentMonth, lastDayOfMonth),
        },
      ];
    } else {
      return [
        {
          start: new Date(currentYear, currentMonth, halfDay + 1),
          end: new Date(currentYear, currentMonth, lastDayOfMonth),
        },
        {
          start: new Date(currentYear, currentMonth + 1, 1),
          end: new Date(currentYear, currentMonth + 1, lastDayOfNextMonth),
        },
      ];
    }
  }

  useEffect(() => {
    setDateRange(getDayRange(Number(state), 15, 22));
  }, [state]);

  return (
    <div>
      <h1>Test</h1>
      Day
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <br />
      Date Range
      {dateRange
        ? dateRange.map((range, index) => (
            <div key={index}>
              <div>Start: {range.start.toDateString()}</div>
              <div>End: {range.end.toDateString()}</div>
            </div>
          ))
        : "Invalid day"}
      <br />
      <div style={{ width: "300px", margin: "20px" }}>
        <MaterialInput label="Username" placeholder="Enter your username" />
        <MaterialInput label="Danger!!" placeholder="Wow" danger />
      </div>
    </div>
  );
}
