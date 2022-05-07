import axios from "axios";
import React, { useState } from "react";

export const WordCheck = () => {
  const [input, setInput] = useState("");

  function checkWord(word: string) {
    axios.get(`/.netlify/functions/wordCheck?word=${word}`).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="word-check">
      <input
        className="word-check__input"
        value={input}
        onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        type="text"
        placeholder="Tarkista sana"
      />
      <button disabled={input === ""} onClick={() => checkWord(input)}>
        Tarkista
      </button>
    </div>
  );
};
