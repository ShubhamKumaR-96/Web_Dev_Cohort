import React from "react";
import getStyleType from "./getButtonStyle";

const Button = ({ text, onClickHandler, type, styleType = "Primary" }) => {
  return (
    <button
      className={`px-4 py-2 ${getStyleType(styleType)} text-white`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
