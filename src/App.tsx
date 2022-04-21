import React, { useState } from "react";
import "./App.css";
import CountdownTimerContainer from "./components/TimerContainer";
import { shuffle, shuffleArray } from "./lib/helpers";

const App = () => {
  const DICE: string[][] = [
    ["V", "I", "L", "L", "E", "V"],
    ["O", "I", "T", "T", "A", "A"],
    ["A", "I", "N", "A", "S", "T"],
    ["A", "N", "P", "F", "S", "K"],
    ["A", "P", "H", "S", "K", "O"],
    ["D", "E", "S", "R", "I", "L"],
    ["E", "I", "E", "N", "U", "S"],
    ["H", "I", "K", "N", "M", "U"],
    ["A", "G", "A", "Ä", "L", "Ä"],
    ["C", "I", "O", "T", "M", "U"],
    ["A", "J", "T", "O", "T", "O"],
    ["E", "I", "T", "O", "S", "S"],
    ["E", "L", "Y", "T", "T", "R"],
    ["A", "K", "I", "T", "M", "V"],
    ["A", "I", "L", "K", "V", "Y"],
    ["A", "L", "R", "N", "N", "U"],
  ];

  const [dice, setDice] = useState(shuffle(DICE));
  const [isTimerOn, toggle] = useState(false);

  function shuffleDice() {
    setDice([...shuffleArray(DICE)]);
  }

  return (
    <>
      <img src={"logo.png"} className="app-logo" alt="logo" />
      <div className="game-board">
        {dice.map((die: string[], index: number) => (
          <div key={index} className="die">
            {shuffle(die)[0]}
          </div>
        ))}
      </div>
      <Button handler={shuffleDice}>Sekoita</Button>
      <CountdownTimerContainer />
    </>
  );
};

interface ButtonProps {
  handler: () => void;
  children: React.ReactNode;
}

const Button = ({ handler }: ButtonProps) => {
  return <button onClick={handler}>Sekoita</button>;
};

export default App;
