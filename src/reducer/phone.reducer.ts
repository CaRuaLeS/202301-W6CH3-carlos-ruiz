import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./phone.actions.creator";

type state = {
  phoneNumber: string;
  isCalling: boolean;
};

const initialState: state = {
  phoneNumber: "",
  isCalling: false,
};

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.clickNumberCreator, (state, { payload }) => ({
    ...state,
    phoneNumber: state.phoneNumber + payload,
  }));
  builder.addCase(ac.deleteNumberCreator, (state) => ({
    ...state,
    phoneNumber: initialState.phoneNumber,
  }));
  builder.addCase(ac.callCreator, (state) => ({
    ...state,
    isCalling: (state.isCalling = true),
  }));
  builder.addCase(ac.hangCreator, (state) => ({
    ...state,
    isCalling: (state.isCalling = false),
  }));

  builder.addDefaultCase((state) => state);
});
