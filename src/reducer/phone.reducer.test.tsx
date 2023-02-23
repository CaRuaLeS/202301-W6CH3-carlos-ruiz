import {
  clickNumberCreator,
  deleteNumberCreator,
} from "./phone.actions.creator";
import { phoneReducer } from "./phone.reducer";

describe("Given the phoneReducer", () => {
  describe("When we set an initial state on the action", () => {
    test("Then if it clicks on a number it should be a change state", () => {
      let result = phoneReducer(
        {
          phoneNumber: "",
          isCalling: false,
        },
        clickNumberCreator("8")
      );
      expect(result).toBe("8");
    });
    test("Then if it clicks on delete, it should clean the state", () => {
      let result = phoneReducer("12345", deleteNumberCreator());
      expect(result).toBe("");
    });
  });
});
