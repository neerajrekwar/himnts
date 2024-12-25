import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-96 flex justify-center items-center px-4">
      <div className="text-4xl max-w-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      himnts is
        <FlipWords words={words} /> <br />
        Exquisite balloon artistry for discerning clients
      </div>
    </div>
  );
}
