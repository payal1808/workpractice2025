// String Methods (complete)

// function getStringLength(str){
//     return str.length;
// }
// console.log(getStringLength("JavaScript"));


// function findFirstApple(str){
//     return str.indexOf("apple");
// }
// console.log(findFirstApple("I have an apple and a banana"));


// function findLastApple(str){
//     return str.LastindexOf("apple");
// }
// console.log(findLastApple("I have an apple and another apple"));


// function findFirstNumberPosition(str){
//     const match = str.search(/\d/);
//     return match;
// }
// console.log(findFirstNumberPosition("My favourite number is 42"));


// function findFirstDigitPosition(str){
//     const match = str.search(/[0-9]/);
//     return match;
// }
// console.log(findFirstDigitPosition("The year is 2024"));


// function findFirstVowelPosition(str){
//     const match = str.search(/[aeiouAEIOU]/);
//     return match;
// }
// console.log(findFirstVowelPosition("rhythm"));
// console.log(findFirstVowelPosition("JavaScript"));


// function findFirstTwoOrMoreDigits(str){
//     const match = str.search(/\d{2,}/);
//     return match;
// }
// console.log(findFirstTwoOrMoreDigits("There are 20 apples"));
// console.log(findFirstTwoOrMoreDigits("I have 1 apple"));


// function findFirstWordEndingWithS(str){
//     return str.search(/\b\w+s\b/);
// }
// console.log(findFirstWordEndingWithS("The dogs are barking"));


// function findFirstWordStartingWithCapital(str) {
//     return str.search(/\b[A-Z]\w*\b/);
// }
// console.log(findFirstWordStartingWithCapital("hello World"));


// function replaceDogWithCat(str){
//     return str.replace("dog", "cat");
// }
// console.log(replaceDogWithCat("The dog is in the yard"));


// function padNumberWithZeros(numstr){
//     return numstr.padStart(5, '0');
// }
// console.log(padNumberWithZeros("42"));


// function padWithExclamationMarks(str){
//     return str.padEnd(10, '!');
// }
// console.log(padWithExclamationMarks("hello"));


// function extractWord(str) {
//     const startIndex = str.indexOf("world");
//     if (startIndex === -1){
//         return "";
//     }
//     return str.substring(startIndex, startIndex + "world".length);
// }
// console.log(extractWord("Hello world!"));


// function extractFirst4Chars(str) {
//     return str.substring(0,4);
// }
// console.log(extractFirst4Chars("JavaScript"));


// function extractCharsFrom4thPosition(str) {
//     return str.substring(4, 4 + 6);
// }
// console.log(extractCharsFrom4thPosition("JavaScript"));