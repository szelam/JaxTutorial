const { isEqual } = require("lodash");
function case2(originalQuery, filterObject, defaultQuery) {
  var query = filterObject;
  for (const key in query) {
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
  }

  for (const key in defaultQuery) {
    if (query[key] === undefined) {
      query[key] = defaultQuery[key];
    }
  }

  console.log(query);
  return query;
}

test(`case 2 checking`, () => {
  const originalQuery = {
    name: "Paul",
    "phone.number": "99999999",
    age: 24,
    constructionSiteIds: ["123", "456"],
  };
  const filterObject = {
    name: "Leo",
    user: { profiles: [] },
    setter: () => {},
    age: null,
    constructionSiteIds: [],
  };
  const defaultQuery = {
    _limit: 20,
    _populate: ["name", "age"],
    _page: 1,
  };
  const result = case2(originalQuery, filterObject, defaultQuery);
  expect(
    isEqual(result, {
      name: "Leo",
      _limit: 20,
      _page: 1,
      _populate: ["name", "age"],
    })
  ).toBeTruthy();
});
