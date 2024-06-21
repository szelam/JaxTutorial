const { isEqual } = require("lodash");
function case5(originalQuery, filterObject, defaultQuery) {
  function isOnlyConsoleLog(func) {
    const funcStr = func.toString();
    const bodyMatch = funcStr.match(/{([\s\S]*)}/);
    const body = bodyMatch[1].trim();
    const consoleLogPattern = /^console\.log\(.*\);\s*$/;
    const lines = body.split("\n").map((line) => line.trim());
    return lines.every((line) => consoleLogPattern.test(line));
  }

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
      (typeof value === "function" && value.toString() === "() => {}") ||
      (typeof value === "function" && isOnlyConsoleLog(value))
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
