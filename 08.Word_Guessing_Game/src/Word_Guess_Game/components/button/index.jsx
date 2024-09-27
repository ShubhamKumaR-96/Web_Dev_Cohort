import "./style.css";

const Type = {
  CIRCULAR: "circle",
  ROUNDED: "rounded",
};

function Button({ onClick = () => {}, lable = "", type = Type.ROUNDED }) {
  const className = `btn_${type}`;
  return (
    <button className={className} onClick={onClick}>
      {lable}
    </button>
  );
}

Button.Type = Type;

export default Button;
