import React, { useState } from "react";
import "./App.css";
import { LanguageSelect } from "./components/LanguageSelect";
import CountdownTimerContainer from "./components/TimerContainer";
import { DICE_ENGLISH, DICE_FINNISH } from "./lib/dice";
import { shuffle, shuffleArray } from "./lib/helpers";

const App = () => {
  const [dice, setDice] = useState(shuffle(DICE_FINNISH));
  const [activeLanguage, setActiveLanguage] = useState("fi");

  function shuffleDice() {
    setDice([...shuffleArray(DICE_FINNISH)]);
  }

  function langSelect(lang: string) {
    if (lang === "fi") {
      setDice(shuffle(DICE_FINNISH));
      setActiveLanguage(lang);
    }
    if (lang === "en") {
      setDice(shuffle(DICE_ENGLISH));
      setActiveLanguage(lang);
    }
  }

  return (
    <>
      <LanguageSelect
        clickHandler={langSelect}
        activeLanguage={activeLanguage}
      />
      <img src={"logo.png"} className="app-logo" alt="logo" />
      <div className="game-board">
        {dice.map((die: string[], index: number) => (
          <div key={index} className="die">
            {shuffle(die)[0]}
          </div>
        ))}
      </div>
      <Button handler={shuffleDice} activeLanguage={activeLanguage} />
      <CountdownTimerContainer activeLanguage={activeLanguage} />
    </>
  );
};

interface ButtonProps {
  handler: () => void;
  activeLanguage: string;
}

const Button = ({ handler, activeLanguage }: ButtonProps) => {
  return (
    <button onClick={handler}>
      {activeLanguage === "fi" ? "Sekoita" : "Shuffle"}
    </button>
  );
};

export default App;
