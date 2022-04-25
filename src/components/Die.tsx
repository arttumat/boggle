import React from "react";
import { useAppSelector } from "../hooks";
import { shuffle } from "../lib/helpers";
import { selectDirection } from "../reducers/directionSlice";

interface DieProps {
  die: string[];
  index: number;
}

export const Die = ({ die, index }: DieProps) => {
  const classNames = ["left", "right", "top", "bottom"];
  const randomize = useAppSelector(selectDirection);
  // pick one of the classNames at random
  const className = classNames[Math.floor(Math.random() * classNames.length)];
  return (
    <div className={randomize ? `die ${className}` : "die"} key={index}>
      {shuffle(die)[0]}
    </div>
  );
};
