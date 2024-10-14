const ALPHABETS="QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({text,guessLetters,onLetterClick}){
  
    const originalLetter=new Set(text.toUpperCase().split(''));
    const guessLettersSet=new Set(guessLetters);

    const buttonStyle= function(letter){
        if(guessLettersSet.has(letter)){
            return `${originalLetter.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        }else{
            return 'bg-blue-500'
        }
    }

    function handleLetterClick(e){
      const guessedCharLetter=e.target.value;
      onLetterClick?.(guessedCharLetter)
    }

    const buttons=ALPHABETS.map(letter=>{
        return(
            <button key={`button-${letter}`} value={letter} onClick={handleLetterClick} disabled={guessLettersSet.has(letter)}
             className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`} >
                {letter}
            </button>
        )
    })

    return (
        <>
        {buttons}
        </>
    )

}
export default LetterButtons;