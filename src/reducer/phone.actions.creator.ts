import { createAction } from "@reduxjs/toolkit";
import { phoneActions } from "./phone.actions.type";

export const clickNumberCreator = createAction<string>(
  phoneActions.clickNumber
);

export const deleteNumberCreator = createAction(phoneActions.deleteNumber);

export const changeCallCreator = createAction<boolean>(
  phoneActions.changeCallState
);
