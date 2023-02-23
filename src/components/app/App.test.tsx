/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../../store/store";

test("renders learn react link", () => {
  const result = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(result).toBeInTheDocument();
});
