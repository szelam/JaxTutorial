const { isEqual } = require("lodash");

function case3(originalQuery, filterObject, defaultQuery) {}

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
