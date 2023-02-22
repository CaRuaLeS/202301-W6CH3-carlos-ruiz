//import { useContext } from "react";
//import { PhoneContext } from "../../context/phone-context";
import * as ac from "../../reducer/phone.actions.creator";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

export function Key() {
  const dispatch = useDispatch<AppDispatch>();

  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const handlerNumber = (number: string) => {
    dispatch(ac.clickNumberCreator(number));
  };
  const handlerDelete = () => {
    dispatch(ac.deleteNumberCreator());
  };

  return (
    <>
      {nums.map((num) => (
        <li>
          <button className="key" onClick={() => handlerNumber(num)}>
            {num}
          </button>
        </li>
      ))}
      <li>
        <button className="key big" onClick={() => handlerDelete()}>
          delete
        </button>
      </li>
    </>
  );
}
