import getMaskedString from "./MaskingUtility";

function MaskedText({ text, guessLetters }) {
  const maskedString = getMaskedString(text, guessLetters);

  return (
    <>
      {/* If maskedString is a string, we need to split it into an array before mapping */}

      {maskedString.map((letter, idx) => (
        <span className="mx-1" key={idx}>{letter}</span>
      ))}
    </>
  );
}
export default MaskedText;
