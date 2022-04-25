import React from "react";
import { Die } from "./Die";

interface BoardProps {
  dice: string[][];
}

export const Board = ({ dice }: BoardProps) => {
  return (
    <div className="game-board">
      {dice.map((die: string[], index: number) => (
        <Die die={die} index={index} key={index} />
      ))}
    </div>
  );
};
