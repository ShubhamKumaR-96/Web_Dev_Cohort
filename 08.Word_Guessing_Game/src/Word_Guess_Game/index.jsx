import { useState } from "react";
import Controller from "./controller";
import Hint from "./hint";
import KeyBoard from "./keyboard";
import ScoreBoard from "./scoreBoard";
import "./style.css";
import { questions } from "./constant";

const DEFAULT_START_INDEX = 0;

function WordGuessGame() {
  const [questionsData, setQuestionsData] = useState(
    structuredClone(questions)
  ); // Renamed for clarity
  const [activeQuesIdx, setActiveQuesIdx] = useState(DEFAULT_START_INDEX);

  const activeQues = questionsData[activeQuesIdx]; // Default to an empty object

  const { question, answer, hint } = activeQues; // Destructuring with default values

  const showPrev=activeQuesIdx>0;
  const showNext=activeQuesIdx<question.length-1;

  function handlePrev() {
    if (activeQuesIdx === 0) {
      return;
    }
    setActiveQuesIdx(activeQuesIdx - 1);
  }
  function handleNext() {
    if (activeQuesIdx === questionsData.length - 1) {
      return;
    }
    setActiveQuesIdx(activeQuesIdx + 1);
  }

  function handleKeyPress(key) {
    console.log(`Key pressed: ${key}`);
  }
 
  

  return (
    <div>
      <div className="hint-score">
        <Hint hint={hint} />
        <ScoreBoard />
      </div>
      <Controller showNext={showNext} showPrev={showPrev} handleNext={handleNext} handlePrev={handlePrev} question={question} />
      
      <KeyBoard handleKeyPress={handleKeyPress} />
    </div>
  );
}

export default WordGuessGame;
