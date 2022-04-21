import React from "react";

interface LanguageSelectProps {
  clickHandler: (language: string) => void;
  activeLanguage: string;
}

export const LanguageSelect = ({
  clickHandler,
  activeLanguage,
}: LanguageSelectProps) => {
  return (
    <div className="language-select">
      <div className="language-select__options">
        <div className="language-select__option">
          <button
            className={activeLanguage === "fi" ? "active" : "inactive"}
            onClick={() => clickHandler("fi")}
          >
            FI
          </button>
        </div>
        <div className="language-select__option">
          <button
            className={activeLanguage === "en" ? "active" : "inactive"}
            onClick={() => clickHandler("en")}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};
