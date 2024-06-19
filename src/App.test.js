// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { render, screen } from '@testing-library/react';
// import App from './App';

const { cloneDeep, isEqual } = require("lodash");

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

function case1(originalQuery, filterObject, defaultQuery) {
  const query = cloneDeep(filterObject);
  for (const key in defaultQuery) {
    if (query[key] === undefined) {
      query[key] = defaultQuery[key];
    }
  }
  console.log(query);
  return query;
}

test("Case 1 checking", () => {
  const originalQuery = {
    name: "Paul",
    age: 20,
    "phone.number": "99999999",
    constructionSiteIds: ["123"],
  };
  const filterObject = {
    name: "Leo",
    age: 24,
    "phone.number": "99999999",
  };
  const defaultQuery = {
    _limit: 20,
    _populate: ["name", "age"],
    _page: 1,
  };
  const result = case1(originalQuery, filterObject, defaultQuery);
  expect(
    isEqual(result, {
      age: 24,
      name: "Leo",
      "phone.number": "99999999",
      _limit: 20,
      _page: 1,
      _populate: ["name", "age"],
    })
  ).toBeTruthy();
});
