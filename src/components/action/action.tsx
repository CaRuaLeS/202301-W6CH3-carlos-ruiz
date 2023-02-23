/* eslint-disable jsx-a11y/anchor-is-valid */
import * as ac from "../../reducer/phone.actions.creator";
export function Action({ type }: any) {
  const handlerIsCalling = (isCalling: boolean) => {
    dispatch(ac.changeCallCreator(isCalling));
  };

  return (
    <>
      <a
        href="#"
        className={type}
        onClick={() => {
          handlerIsCalling(true);
        }}
      >
        {type}
      </a>
      <a href="#" className="hang active">
        Hang
      </a>
    </>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
