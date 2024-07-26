const BASIC_POLICY = {
  publicHolidays: [],
  openingDays: [0, 1, 2, 3, 4, 5, 6, 7],
  byDay: {
    0: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],
    1: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    2: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    3: [
      { from: "00:00", to: "12:00", bookMinHours: 60, bookMaxHours: 3 },
      { from: "12:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 },
    ],

    4: [
      { from: "00:00", to: "13:00", bookMinHours: 60, bookMaxHours: 3 },
      { from: "14:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 },
    ],

    5: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    6: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    7: [{ from: "00:00", to: "12:00", bookMinHours: 60, bookMaxHours: 3 }],
  },
};

const NO_MAX_POLICY = {
  publicHolidays: [],
  openingDays: [0, 1, 2, 3, 4, 5, 6, 7],
  byDay: {
    0: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: null }],
    1: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: null }],

    2: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: null }],

    3: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: null }],

    4: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: null }],

    5: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: null }],

    6: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: null }],

    7: [{ from: "00:00", to: "12:00", bookMinHours: 60, bookMaxHours: null }],
  },
};

const TEST_CROSS_BP_POLICY = {
  publicHolidays: [],
  openingDays: [0, 1, 2, 3, 4, 6, 7],
  byDay: {
    0: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],
    1: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    2: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    3: [
      { from: "00:00", to: "12:00", bookMinHours: 60, bookMaxHours: null },
      { from: "12:00", to: "23:59", bookMinHours: 60, bookMaxHours: null },
    ],

    4: [
      { from: "00:00", to: "13:00", bookMinHours: 60, bookMaxHours: null },
      { from: "14:00", to: "23:59", bookMinHours: 60, bookMaxHours: null },
    ],

    5: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    6: [{ from: "00:00", to: "23:59", bookMinHours: 60, bookMaxHours: 3 }],

    7: [{ from: "00:00", to: "12:00", bookMinHours: 60, bookMaxHours: 3 }],
  },
};

export const DEFAULT_POLICY = TEST_CROSS_BP_POLICY;
export const CARPARK_ID = "62f2106a1aa3d91e23a191a8";
export const SERVICEPLAN_ID = "65ed8c16f34856943b1183e9";
export const MERCHANT_ID = "62f0cf4078e1fefcacb7c973";
