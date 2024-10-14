import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/MaskedTest";
import LetterButtons from "../LetterButtons/LetterButtons";
import HangMan from "../HangMan.jsx/HangMan";

const PlayGame = () => {
  const { state } = useLocation();

  const [guessLetters, setGuessLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLetterClick(letter) {
    if (state.wordSelected?.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Wrong");
      setStep(step + 1);
    }

    setGuessLetters([...guessLetters, letter]);
  }

  return (
    <div>
      <h1>Play Game {state.wordSelected}</h1>
      <div>
        <MaskedText text={state.wordSelected} guessLetters={guessLetters} />
      </div>
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessLetters={guessLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
      <div>
        <HangMan step={step} />
      </div>
      <Link to="/start" className="text-blue-500">
        {" "}
        Start Game Link
      </Link>
    </div>
  );
};

export default PlayGame;
