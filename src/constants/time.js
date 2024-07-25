const BASIC_POLICY = {
  publicHolidays: [],
  openingDays: [0, 1, 2, 3, 4, 5, 6, 7],
  byDay: {
    0: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    }, // Monday
    1: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    2: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    3: {
      availablePeriods: [
        { from: "00:00", to: "12:00" },
        { from: "12:00", to: "23:59" },
      ],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    4: {
      availablePeriods: [
        { from: "00:00", to: "13:00" },
        { from: "14:00", to: "23:59" },
      ],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    5: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    6: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    7: {
      availablePeriods: [{ from: "00:00", to: "12:00" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    }, // public holidays
  },
};

const NO_MAX_POLICY = {
  publicHolidays: [],
  openingDays: [0, 1, 2, 3, 4, 5, 6, 7],
  byDay: {
    0: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    }, // Monday
    1: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    2: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    3: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    4: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    5: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    6: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    7: {
      availablePeriods: [{ from: "00:00", to: "12:00" }],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    }, // public holidays
  },
};

const TEST_CROSS_BP_POLICY = {
  publicHolidays: [],
  openingDays: [0, 1, 2, 3, 4, 5, 6, 7],
  byDay: {
    0: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    }, // Monday
    1: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    2: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    3: {
      availablePeriods: [
        { from: "00:00", to: "12:00" },
        { from: "12:00", to: "23:59" },
      ],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    4: {
      availablePeriods: [
        { from: "00:00", to: "13:00" },
        { from: "14:00", to: "23:59" },
      ],
      bookTimeUnit: 60,
      bookMaxUnit: null,
    },
    5: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    6: {
      availablePeriods: [{ from: "00:00", to: "23:59" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    },
    7: {
      availablePeriods: [{ from: "00:00", to: "12:00" }],
      bookTimeUnit: 60,
      bookMaxUnit: 3,
    }, // public holidays
  },
};

export const DEFAULT_POLICY = TEST_CROSS_BP_POLICY;
export const CARPARK_ID = "62f2106a1aa3d91e23a191a8";
export const SERVICEPLAN_ID = "65ed8c16f34856943b1183e9";
export const MERCHANT_ID = "62f0cf4078e1fefcacb7c973";
