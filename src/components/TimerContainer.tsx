import React, { useState } from "react";
import CountDownTimer from "./Timer";

interface CountdownTimerContainerProps {
  activeLanguage: string;
}

const CountdownTimerContainer = ({
  activeLanguage,
}: CountdownTimerContainerProps) => {
  const [isTimerOn, toggle] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

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
          />
          <button onClick={() => timerStop()}>
            {activeLanguage === "fi" ? "Pysäytä" : "Stop"}
          </button>
        </>
      ) : (
        <button onClick={() => timerStart()}>
          {activeLanguage === "fi" ? "Aloita" : "Start"}
        </button>
      )}
    </>
  );
};

export default CountdownTimerContainer;
