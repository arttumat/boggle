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
      <div className="game-board">
        {dice.map((die: string[], index: number) => (
          <div key={index} className="die">
            {shuffle(die)[0]}
          </div>
        ))}
      </div>
      <button onClick={shuffleDice}>
        {activeLanguage === "fi" ? "Sekoita" : "Shuffle"}
      </button>
      <CountdownTimerContainer activeLanguage={activeLanguage} />
    </>
  );
};

export default App;
