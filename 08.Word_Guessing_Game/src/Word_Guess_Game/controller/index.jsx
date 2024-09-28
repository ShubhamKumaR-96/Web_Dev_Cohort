import Button from "../components/button";
import Text from "../components/text";
import "./style.css";

function Controller({ question,handlePrev,handleNext, showPrev, showNext }) {
  return (
    <div className="controller">
      {showPrev && <Button type={Button.Type.CIRCULAR} label="Prev" onClick={handlePrev} />}
      <Text text={question} type={Text.StyleType.SCORE} />
      {showNext &&  <Button type={Button.Type.CIRCULAR} label="Next"  onClick={handleNext}/>}
    </div>
  );
}

export default Controller;
