import { FcHighPriority } from "@react-icons/all-files/fc/FcHighPriority";
import { FcOk } from "@react-icons/all-files/fc/FcOk";
import axios from "axios";
import React, { useState } from "react";

export const WordCheck = () => {
  const [input, setInput] = useState("");
  const [isWord, setIsWord] = useState<boolean | null>(null);

  function checkWord(word: string) {
    setIsWord(null);
    axios.get(`/.netlify/functions/wordCheck?word=${word}`).then((res) => {
      console.log(res);
      if (res.data === "true") {
        setIsWord(true);
      }
      if (res.data === "false") {
        setIsWord(false);
      }
    });
  }

  function changeInput(value: string) {
    if (isWord !== null) {
      setIsWord(null);
    }
    setInput(value);
  }

  return (
    <div className="word-check">
      <div className="input-row">
        <input
          className="word-check__input"
          value={input}
          onInput={(e) => changeInput((e.target as HTMLInputElement).value)}
          type="text"
          placeholder="Tarkista sana"
        />
        {isWord !== null && isWord && <FcOk className="icon" />}
        {isWord !== null && !isWord && <FcHighPriority className="icon" />}
      </div>
      <button disabled={input === ""} onClick={() => checkWord(input)}>
        Tarkista
      </button>
    </div>
  );
};
