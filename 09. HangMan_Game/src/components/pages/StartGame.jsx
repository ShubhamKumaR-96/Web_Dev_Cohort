import React from "react";
import { Link } from "react-router-dom";
import TextInputFormContainer from "../TextInputForm/TextInputFormContainer";

const StartGame = () => {
  return (
    <div>
      <h1>Start Game</h1>
      <TextInputFormContainer />
      <Link to="/play" className="text-green-400">
        Play Game Link
      </Link>
    </div>
  );
};

export default StartGame;
