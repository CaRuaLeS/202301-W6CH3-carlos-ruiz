import { Display } from "../display/display";
import { Action } from "../action/action";

export function Actions() {
  return (
    <>
      <div className="actions">
        <Display></Display>
        <Action type="call"></Action>
        <Action type="hang"></Action>
      </div>
    </>
  );
}
