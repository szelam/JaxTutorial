import moment from "moment";
import { getDayRange } from "./utils/getDayRange";

describe("getDayRange", () => {
  const halfDay = 15;
  const renewDay = 25;

  test("returns 'invalid-date' for invalid date", () => {
    const invalidDate = Date("invalid-date");
    expect(getDayRange(invalidDate, halfDay, renewDay)).toBe("invalid-date");
  });

  test("returns invalid-date for day exceeding last day of month", () => {
    const invalidDay = moment("2023-04-31"); // April has 30 days
    expect(getDayRange(invalidDay, halfDay, renewDay)).toBe("invalid-date");
  });

  test("returns correct range for day <= halfDay", () => {
    const date = moment("2023-04-10");
    const result = getDayRange(date, halfDay, renewDay);
    expect(result).toEqual([
      {
        start: new Date(2023, 3, 1), // 2023 / 4 / 1
        end: new Date(2023, 3, 30), // 2023 / 4 / 30
      },
    ]);
  });

  test("returns correct range for halfDay < day <= renewDay", () => {
    const date = moment("2023-04-20");
    const result = getDayRange(date, halfDay, renewDay);
    expect(result).toEqual([
      {
        start: new Date(2023, 3, 16), // 2023 / 4 / 16
        end: new Date(2023, 3, 30), // 2023 / 4 / 30
      },
    ]);
  });

  test("returns correct ranges for day > renewDay", () => {
    const date = moment("2023-04-26");
    const result = getDayRange(date, halfDay, renewDay);
    expect(result).toEqual([
      {
        start: new Date(2023, 3, 16), // 2023 / 4 / 16
        end: new Date(2023, 3, 30), // 2023 / 4 / 30
      },
      {
        start: new Date(2023, 4, 1), // 2023 / 5 / 1
        end: new Date(2023, 4, 31), // 2023 / 5 / 31
      },
    ]);
  });

  test("handles month rollover correctly", () => {
    const date = moment("2023-12-26");
    const result = getDayRange(date, halfDay, renewDay);
    expect(result).toEqual([
      {
        start: new Date(2023, 11, 16), // 2023 / 12 / 16
        end: new Date(2023, 11, 31), // 2023 / 12 / 31
      },
      {
        start: new Date(2024, 0, 1), // 2024 / 1 / 1
        end: new Date(2024, 0, 31), // 2024 / 1 / 31
      },
    ]);
  });
});
