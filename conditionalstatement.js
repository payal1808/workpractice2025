// Conditional Statements (complete)


// function checkNumber(num){
//     if (num>0){
//         console.log("Positive number");
//     }else if(num<0){
//         console.log("Negative number");
//     }else {
//         console.log("Zero");
//     // }
// }
// checkNumber(-5);


// function checkEvenOdd(num){
//     if(num % 2 === 0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }
// checkEvenOdd(8);


// function checkVotingEligibility(age){
//     if(age >=18){
//         console.log("Eligible to vote");
//     }else{
//         console.log("Not eligible to vote");
//     }
// }
// checkVotingEligibility(16);


// function findGreatest(num1, num2, num3){
//     if(num1 >= num2 && num1 >= num3) {
//         return num1 + "is the greatest";
//     }else if(num2 >= num1 && num2 >= num3){
//         return num2 + "is the greatest";
//     }else{
//         return num3 + "is the greatest";
//     }
// }
// console.log(findGreatest(4,9,2));


// function checkVowelConsonant(char) {
//     const lowerChar = char.toLowerCase();
//     if (lowerChar === 'a' || lowerChar === 'e' ||  lowerChar === 'i' || lowerChar === 'o' ||lowerChar === 'u'){
//         console.log("Vowel");
//     }else{
//         console.log("Consonant");
//     }
// }
// checkVowelConsonant('p');


// function checkLeapYear(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0){
//         console.log("Leap year");
//     }else{
//         console.log("Not a leap year");
//     }
// }
// checkLeapYear(2024);


// function checkDivisiblityBy3And5(num){
//     if (num % 3 == 0 && num % 5 === 0){
//         console.log("Divisible by both 3 and 5");
//     }else {
//         console.log("Not divisible by both 3 and 5");
//     }
// }
// checkDivisiblityBy3And5(15);


// function checkNumberInRange(num){
//     if(num >=50 && num <= 100){
//         console.log("In range");
//     }else{
//         console.log("Out of range");
//     }
// }
// checkNumberInRange(75);


// function assignGrade(marks){
//     if(marks >= 90) {
//         console.log("Grade: A");
//     }else if (marks >= 80) {
//         console.log("Grade: B");
//     }else if (marks >=70) {
//         console.log("Grade: C");
//     }else if(marks >=60) {
//         console.log("Grade: D");
//     }else{
//         console.log("Grade: F");
//     }
// }
// assignGrade(85);


// function checkMultipleOf7Or13(num){
//     if (num % 7 === 0 && num % 13 === 0){
//         console.log("Multiple of both 7 and 13");
//     }else if (num % 7 === 0){
//         console.log("Multiple of 7");
//     }else if (num % 13 === 0){
//         console.log("Multiple of 13");
//     }else{
//         console.log("Not a multiple of 7 or 13");
//     }
// }
// checkMultipleOf7Or13(91);