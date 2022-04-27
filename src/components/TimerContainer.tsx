import React, { useState } from "react";
import { useAppSelector } from "../hooks";
import { selectLang } from "../reducers/languageSlice";
import CountDownTimer from "./Timer";

const CountdownTimerContainer = () => {
  const [isTimerOn, toggle] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const activeLang = useAppSelector(selectLang);

  function timerStart() {
    // iOS browsers require a user interaction to play audio
    // so we initialize the audio element here
    setAudio(new Audio());
    toggle(true);
  }

  function timerEnd() {
    if (audio) {
      audio.src = "alarm.wav";
      audio.play();
    }
    toggle(false);
  }

  function timerStop() {
    toggle(false);
  }

  return (
    <>
      {isTimerOn ? (
        <>
          <CountDownTimer
            hoursMinSecs={{ hours: 0, minutes: 2, seconds: 0 }}
            onComplete={() => timerEnd()}
            stopTimer={() => timerStop()}
          />
        </>
      ) : (
        <button onClick={() => timerStart()}>
          {activeLang === "fi" ? "Aloita" : "Start"}
        </button>
      )}
    </>
  );
};

export default CountdownTimerContainer;
