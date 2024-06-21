const { isEqual } = require("lodash");
function case5(filterObject, defaultQuery) {}

test(`case 5 checking`, () => {
  const filterObject = null;
  const defaultQuery = {
    _limit: 20,
    _page: 1,
    _populate: ["name", "age"],
  };
  const result = case5(filterObject, defaultQuery);
  expect(
    isEqual(result, {
      _limit: 20,
      _page: 1,
      _populate: ["name", "age"],
    })
  ).toBeTruthy();
});
