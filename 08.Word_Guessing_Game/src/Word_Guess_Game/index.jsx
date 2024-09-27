import Button from "./components/button";
import Input from "./components/input";
import Tag from "./components/tag";
import Text from "./components/text";
import "./style.css";

function WordGuessGame() {
  return (
    <div>
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Button onClick={(onclick = () => console.log("K pressed"))} lable="K" />
      <Button
        type={Button.Type.CIRCULAR}
        onClick={(onclick = () => console.log("K pressed"))}
        lable="=>"
      />
      <Tag label={"score"} />
      <Text text="Apple" type={Text.StyleType.ANSWER_HINT} />
      <Text text="My Name" type={Text.StyleType.QUESTION_TITLE} />
      <Text text="Score" type={Text.StyleType.SCORE} />
    </div>
  );
}
export default WordGuessGame;
