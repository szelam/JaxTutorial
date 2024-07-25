import React, { createContext } from "react";

const BaseViewModel = function (model) {
  const Context = createContext(null);
  const withProvider = (ViewComponent) =>
    function (props) {
      const value = model(props);
      return (
        <Context.Provider value={value}>
          <ViewComponent {...props} />
        </Context.Provider>
      );
    };
  return {
    Context,
    withProvider,
  };
};

export default BaseViewModel;
