# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


HANGMAN QUESTION

const guessLettersSet=new Set(guessLetters); 

Why use a Set?
Ensures uniqueness: A Set automatically removes duplicate values. If you need to make sure that no element is repeated (like tracking unique guessed letters in a game), a Set is the right choice.

Efficient lookups: Checking if a value exists in a Set is typically faster (with average time complexity of O(1)) than doing the same in an array, which takes O(n).

Useful operations: Sets provide methods such as:

.add(value): Adds a new element.
.has(value): Checks if an element exists in the set.
.delete(value): Removes an element from the set.
When to use a Set?
You would use a Set when:

You want to store a collection of unique elements (e.g., guessed letters in a word game).
You need to efficiently check for the existence of elements (e.g., checking if a letter has already been guessed).
You don’t care about the order of elements but care about their uniqueness.

Example usage in your code:


const guessLetters = ['a', 'b', 'c', 'a'];
const guessLettersSet = new Set(guessLetters); 
console.log(guessLettersSet); // Output: Set { 'a', 'b', 'c' }