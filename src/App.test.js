const { isEqual } = require("lodash");

function case2(originalQuery, filterObject, defaultQuery) {}

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
      name: "Paul",
      _limit: 20,
      _page: 1,
      _populate: ["name", "age"],
    })
  ).toBeTruthy();
});
