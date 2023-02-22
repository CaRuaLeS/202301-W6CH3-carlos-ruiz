import React from "react";
import { Actions } from "../actions/actions";
import { Info } from "../info/info";
import { Keyboard } from "../keyboard/keyboard";
import "./App.css";

function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}

export default App;
