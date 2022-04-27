import React, { useEffect, useState } from "react";

interface CountDownProps {
  hoursMinSecs: { hours: number; minutes: number; seconds: number };
  onComplete: () => void;
  stopTimer: () => void;
}

const CountDownTimer = ({
  hoursMinSecs,
  onComplete,
  stopTimer,
}: CountDownProps) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => {
    setTime([hours, minutes, seconds]);
    onComplete();
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p className="timer" onClick={stopTimer}>
        {`${hrs.toString().padStart(2, "0")}:${mins
          .toString()
          .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}{" "}
        ■
      </p>
    </div>
  );
};

export default CountDownTimer;
