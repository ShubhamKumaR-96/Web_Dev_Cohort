import Button from "../components/button";
import "./style.css";

function KeyBoard({ handleKeyPress }) {
  const arr = [...new Array(26)];
  let start = 65;

  function handleClick(key) {
    return () => {
      handleKeyPress(key);
    };
  }

  return (
    <div className="keyboard">
      {arr.map((_, idx) => {
        const curKeyIdx = String.fromCharCode(start++);  // Moved outside JSX
        return (
          <Button
            key={idx}
            onClick={handleClick(curKeyIdx)}  // Pass the correct handler
            type={Button.Type.ROUNDED}
            label={curKeyIdx}  // Fixed the typo from lable to label
          />
        );
      })}
    </div>
  );
}

export default KeyBoard;
