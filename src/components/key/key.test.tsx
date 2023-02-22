import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Key } from "./key";

describe("Given the key component", () => {
  describe("When the component is render", () => {
    test("Then it should render", () => {
      render(
        <Provider store={store}>
          <Key></Key>
        </Provider>
      );
      const element = screen.getByText(/delete/i);
      expect(element).toBeInTheDocument();
    });
  });
});
