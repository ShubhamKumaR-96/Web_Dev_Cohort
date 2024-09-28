import Input from "../components/input";
import Text from "../components/text";
import './style.css'

function Hint() {
  return (
    <div className="hint">
     
      <Text text="T" type={Text.StyleType.ANSWER_HINT} />
      <Input />
    </div>
  );
}
export default Hint;
