

function getMaskedString(originalWord, guessLetters) {
    console.log("guessLetter",guessLetters)
     guessLetters=guessLetters.map(letter=>letter.toUpperCase());

     const guessLettersSet=new Set(guessLetters);

    const result= originalWord.toUpperCase().split('').map(char=>{
        if(guessLettersSet.has(char)){
            return char;
        }else {
            return '_';
        }
     })
     return result;
}

export default getMaskedString;
