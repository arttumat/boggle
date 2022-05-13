import { FiSettings } from "@react-icons/all-files/fi/FiSettings";
import React from "react";
import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectLang } from "../reducers/languageSlice";
import { selectVer, setVer } from "../reducers/versionSlice";
import { LanguageSelect } from "./LanguageSelect";
import { Scoring } from "./Scoring";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "33%",
    height: "max-content",
  },
};

const customStylesMobile = {
  content: {
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
  },
};

interface OptionsProps {
  langSelect: (lang: string) => void;
}

export const Options = ({ langSelect }: OptionsProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const currentVersion = useAppSelector(selectVer);
  const currentLang = useAppSelector(selectLang);
  const dispatch = useAppDispatch();
  const mobile = window.matchMedia("(max-width: 400px)").matches;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function setVersion(version: string) {
    dispatch(setVer(version));
  }

  return (
    <div>
      <button className="modal-button" onClick={openModal}>
        {currentLang === "fi" ? "Asetukset" : "Options"}
        <FiSettings />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={mobile ? customStylesMobile : customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>{currentLang === "fi" ? "Asetukset" : "Options"}</h2>
        <LanguageSelect clickHandler={langSelect} />
        <div className="old-new-select">
          <div className="language-select__options">
            <div className="language-select__option">
              <button
                className={currentVersion === "old" ? "active" : "inactive"}
                onClick={() => setVersion("old")}
              >
                {currentLang === "fi" ? "Vanhat nopat" : "Old dice"}
              </button>
            </div>
            <div className="language-select__option">
              <button
                className={currentVersion === "new" ? "active" : "inactive"}
                onClick={() => setVersion("new")}
              >
                {currentLang === "fi" ? "Uudet nopat" : "New dice"}
              </button>
            </div>
          </div>
        </div>
        <Scoring />
        <button onClick={closeModal}>
          {currentLang === "fi" ? "Sulje" : "Close"}
        </button>
      </Modal>
    </div>
  );
};
