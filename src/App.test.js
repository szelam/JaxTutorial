const { isEqual } = require("lodash");
function case3(originalQuery, filterObject, defaultQuery) {
  var query = filterObject;
  Object.keys(query).forEach((key) => {
    const value = query[key];
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" &&
        Object.values(value).every(
          (v) =>
            v === undefined ||
            v === null ||
            v === "" ||
            (Array.isArray(v) && v.length === 0)
        )) ||
      (typeof value === "function" && value.toString() === "() => {}")
    ) {
      delete query[key];
    }
  });

  for (const key in defaultQuery) {
    if (query[key] === undefined) {
      query[key] = defaultQuery[key];
    }
  }

  console.log(query);
  return query;
}

test(`case 3 checking`, () => {
  const originalQuery = {
    _limit: 20,
    _page: 1,
    _populate: ["name", "age"],
  };
  const filterObject = {
    _page: 2,
  };
  const defaultQuery = {
    _limit: 20,
    _populate: ["name", "age"],
    _page: 1,
  };
  const result = case3(originalQuery, filterObject, defaultQuery);
  expect(
    isEqual(result, {
      _limit: 20,
      _page: 2,
      _populate: ["name", "age"],
    })
  ).toBeTruthy();
});
