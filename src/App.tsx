import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { LanguageSelect } from "./components/LanguageSelect";
import CountdownTimerContainer from "./components/TimerContainer";
import { useAppDispatch, useAppSelector } from "./hooks";
import { DICE_ENGLISH, DICE_FINNISH } from "./lib/dice";
import { shuffle, shuffleArray } from "./lib/helpers";
import { selectLang, setLang } from "./reducers/languageSlice";

const App = () => {
  const [dice, setDice] = useState(shuffle(DICE_FINNISH));
  const dispatch = useAppDispatch();
  const activeLang = useAppSelector(selectLang);

  function shuffleDice() {
    if (activeLang === "fi") {
      setDice([...shuffleArray(DICE_FINNISH)]);
    }
    if (activeLang === "en") {
      setDice([...shuffleArray(DICE_ENGLISH)]);
    }
  }

  function langSelect(lang: string) {
    if (lang === "fi") {
      setDice(shuffle(DICE_FINNISH));
    }
    if (lang === "en") {
      setDice(shuffle(DICE_ENGLISH));
    }
    dispatch(setLang(lang));
  }

  return (
    <>
      <LanguageSelect clickHandler={langSelect} />
      <Board dice={dice} />
      <div className="button-container">
        <button onClick={shuffleDice}>
          {activeLang === "fi" ? "Sekoita" : "Shuffle"}
        </button>
      </div>
      <CountdownTimerContainer />
    </>
  );
};

export default App;
