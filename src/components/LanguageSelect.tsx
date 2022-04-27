import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectDirection, toggleRandomize } from "../reducers/directionSlice";
import { selectLang } from "../reducers/languageSlice";

interface LanguageSelectProps {
  clickHandler: (language: string) => void;
}

export const LanguageSelect = ({ clickHandler }: LanguageSelectProps) => {
  const randomize = useAppSelector(selectDirection);
  const activeLang = useAppSelector(selectLang);
  const dispatch = useAppDispatch();
  return (
    <div className="language-select__options">
      <div className="language-select__option">
        <button
          className={activeLang === "fi" ? "active" : "inactive"}
          onClick={() => clickHandler("fi")}
        >
          FI
        </button>
      </div>
      <div className="language-select__option">
        <button
          className={activeLang === "en" ? "active" : "inactive"}
          onClick={() => clickHandler("en")}
        >
          EN
        </button>
      </div>
      <div className="vertical-divider"></div>
      <div className="language-select__option">
        <button
          className={randomize ? "active" : "inactive"}
          onClick={() => dispatch(toggleRandomize())}
        >
          {randomize ? "Random" : "Normal"}
        </button>
      </div>
    </div>
  );
};
