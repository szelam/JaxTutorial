export function getDayRange(moment, halfDay, renewDay) {
  try {
    moment.date();
  } catch {
    return "invalid-date";
  }
  const day = moment.date();
  const month = moment.month();
  const year = moment.year();
  if (isNaN(day)) return "invalid-date";

  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const lastDayOfNextMonth = new Date(year, month + 2, 0).getDate();
  console.log(lastDayOfMonth, lastDayOfNextMonth);

  if (day <= halfDay) {
    return [
      {
        start: new Date(year, month, 1),
        end: new Date(year, month, lastDayOfMonth),
      },
    ];
  } else if (day > halfDay && day <= renewDay) {
    return [
      {
        start: new Date(year, month, halfDay + 1),
        end: new Date(year, month, lastDayOfMonth),
      },
    ];
  } else {
    return [
      {
        start: new Date(year, month, halfDay + 1),
        end: new Date(year, month, lastDayOfMonth),
      },
      {
        start: new Date(year, month + 1, 1),
        end: new Date(year, month + 1, lastDayOfNextMonth),
      },
    ];
  }
}
