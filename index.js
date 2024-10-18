//1. Anagram program
//Find str1 and str2 are same
//if both strings are equal then it is Anagram else not a anagram

/* const str1 = "Listen";
const str2 = "Slients";

const process1 = str1.toLowerCase().split("").sort().join();
const process2 = str2.toLowerCase().split("").sort().join(); 

if (process1 === process2) {
    console.log("It is a Anagram");
  } else {
    console.log("Not a Anagram");
  } */

//-----------------------------------------------------------------------------------------

//2. Create first character as capital

/* const character = "first name";

const capitalize = character
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalize); */

//-----------------------------------------------------------------------------------------

//3. Palindrome

/* const letter = "Malayalam";

const reverseWord = letter.split("").reverse().join("");

if (letter.toLowerCase() === reverseWord.toLowerCase()) {
  console.log("It is a Palindrome");
} else {
  console.log("It is not a Palindrome");
}
 */

//4.Last word in a sentence to be capital

/* let sentence =
  "Please entertain the musiz show which is programmed by a karthickworld";

let splitSentence = sentence.split(" ");
console.log(splitSentence);
let lastWord = splitSentence.pop();
lastWord = lastWord.toUpperCase();

let final = splitSentence.join(" ") + " " + lastWord;
console.log(final);
 */

//5. Array Last Item

//const letter = ["w", "b", "n", "v"];
//console.log(letter[letter.length - 1]);
//console.log(letter.slice(-1)[0]);
//console.log(letter.at(-1));

//This two below console log will disturb the original array
//console.log(letter.pop());
//console.log(letter.reverse()[0]);
//console.log(letter);

//6. Empty the Array

/* let a = [1, 2, 3, 4, 5, 6, 7];
let b = a; */
//a = [];

//a.length = 0;

//a.splice(0, a.length);

/* while (a.length > 0) {
  a.pop();
} */
/* console.log(a);
console.log(b); */

//Find Unique Array Value
const fruits = ["apple", "banana", "apple", "orange", "banana", "grape"];
let uniqueFruits = [];
for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits.indexOf(fruits[i]));
  // console.log(uniqueFruits.indexOf(fruits[i]));
  if (uniqueFruits.indexOf(fruits[i]) === -1) {
    uniqueFruits.push(fruits[i]);
  }
}

console.log(uniqueFruits);
