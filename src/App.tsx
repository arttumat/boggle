import { FaDice } from "@react-icons/all-files/fa/FaDice";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Options } from "./components/Options";
import CountdownTimerContainer from "./components/TimerContainer";
import { WordCheck } from "./components/wordCheck";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  DICE_ENGLISH,
  DICE_ENGLISH_NEW,
  DICE_FINNISH,
  DICE_FINNISH_NEW,
} from "./lib/dice";
import { shuffle, shuffleArray } from "./lib/helpers";
import { selectLang, setLang } from "./reducers/languageSlice";
import { selectVer } from "./reducers/versionSlice";

const App = () => {
  const [dice, setDice] = useState(shuffle(DICE_FINNISH));
  const activeLang = useAppSelector(selectLang);
  const version = useAppSelector(selectVer);
  const dispatch = useAppDispatch();

  function shuffleDice() {
    if (activeLang === "fi") {
      if (version === "old") {
        setDice([...shuffleArray(DICE_FINNISH)]);
      } else {
        setDice([...shuffleArray(DICE_FINNISH_NEW)]);
      }
    }
    if (activeLang === "en") {
      if (version === "old") {
        setDice([...shuffleArray(DICE_ENGLISH)]);
      } else {
        setDice([...shuffleArray(DICE_ENGLISH_NEW)]);
      }
    }
  }

  useEffect(() => {
    langSelect(activeLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version]);

  function langSelect(lang: string) {
    if (lang === "fi") {
      if (version === "old") {
        setDice(shuffle(DICE_FINNISH));
      } else {
        setDice(shuffle(DICE_FINNISH_NEW));
      }
    }
    if (lang === "en") {
      if (version === "old") {
        setDice(shuffle(DICE_ENGLISH));
      } else {
        setDice(shuffle(DICE_ENGLISH_NEW));
      }
    }
    dispatch(setLang(lang));
  }

  return (
    <>
      {/* <LanguageSelect clickHandler={langSelect} /> */}
      <Options langSelect={langSelect} />
      <Board dice={dice} />
      <div className="button-container">
        <button onClick={shuffleDice}>
          {activeLang === "fi" ? "Sekoita" : "Shuffle"}
          <FaDice />
        </button>
        <CountdownTimerContainer />
      </div>
      {activeLang === "fi" ? <WordCheck /> : null}
    </>
  );
};

export default App;
