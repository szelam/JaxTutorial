const { isEqual } = require("lodash");
function case6(filterObject, defaultQuery) {}

test(`case 6 checking`, () => {
  const filterObject = {
    phone: {
      setter: () => {
        console.log("asd");
      },
      photos: [],
      boolean: false,
      string: "",
      object: {},
      element: <div></div>,
      nullValue: null,
      undefinedValue: undefined,
    },
  };
  const defaultQuery = {
    _limit: 20,
    _page: 1,
    _populate: ["name", "age"],
  };
  const result = case6(filterObject, defaultQuery);
  expect(
    isEqual(result, {
      _limit: 20,
      _page: 1,
      _populate: ["name", "age"],
    })
  ).toBeTruthy();
});
