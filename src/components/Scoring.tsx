import React from "react";
import { useAppSelector } from "../hooks";
import { selectLang } from "../reducers/languageSlice";

export const Scoring = () => {
  const currentLang = useAppSelector(selectLang);
  return (
    <>
      <h2>{currentLang === "fi" ? "Pisteytys" : "Scoring"}</h2>
      <div className="scoring">
        <div className="scoring__row">
          <div className="scoring__cell">3-4</div>
          <div className="scoring__cell">5</div>
          <div className="scoring__cell">6</div>
          <div className="scoring__cell">7</div>
          <div className="scoring__cell">8+</div>
        </div>
        <div className="scoring__row">
          <div className="scoring__cell">1</div>
          <div className="scoring__cell">2</div>
          <div className="scoring__cell">3</div>
          <div className="scoring__cell">5</div>
          <div className="scoring__cell">11</div>
        </div>
      </div>
    </>
  );
};
