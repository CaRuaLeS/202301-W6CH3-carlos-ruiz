import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./phone.actions.creator";

const initialState: string = "";

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    ac.clickNumberCreator,
    (state, { payload }) => state + payload
  );
  builder.addCase(ac.deleteNumberCreator, (state) => (state = ""));
  builder.addDefaultCase((state) => state);
});
