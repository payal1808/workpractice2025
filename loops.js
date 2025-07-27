// Loops (complete)


// function printNumbers() {
// for(let i=1;i<=10;i++){
    // console.log(i);
// }
    
  
// function sumOfNaturalNumbers(n) {
//  let sum=0;
// for(let i=1; i<=n; i++){
    // sum += i;
// }
// return sum;
// }
// console.log(sumOfNaturalNumbers(5));


// function factorialNumber(n) {
    // let res =1;
    // for(let i=1;i<=n;i++)
    // {
        // res *=i;
    // }
    // return res;
// }
// console.log(factorialNumber(5));


// function PrintEvenNumbers(n) {
    // for (let i=1; i<=n; i++){
        // if(i%2===0){
            // console.log(i);
        // }
    // }
// }
// PrintEvenNumbers(10);


// function reverseString(str) {
    // let reversedStr ="";
    // for (let i= str.length -1; i>=0; i--){
        // reversedStr += str[i];
    // }
    // return reversedStr;
// }
// console.log(reverseString("hello"));


// function printArrayElements(arr) {
    // for (let i=0; i< arr.length; i++){
        // console.log(arr[i]);
    // }
// }
// printArrayElements([1,2,3,4,5]);


// function findLargestNumber(arr){
    // if(arr.length === 0) {
        // return "Array is empty.";
    // }
    // let largest = arr[0];
    // for(let i=1; i < arr.length; i++){
        // if(arr[i]> largest){
            // largest =arr[i];
        // }
    // }
    // return largest;
// }
// console.log(findLargestNumber([1,2,3,4,5]));


// function countVowels(str) {
    // let count=0;
    // const vowels="aeiouAEIOU";
    // for(let i=0; i < str.length; i++){
        // if(vowels.includes(str[i])){
            // count++;
        // }
    // }
    // return count;
// }
// console.log(countVowels("hello"));


// function fibonacci(n) {
    // let a=0, b=1;
    // if (n >=1) {
        // console.log(a);
    // }
    // if (n>=2){
        // console.log(b);
    // }
    // for (let i=3;i<=n;i++){
        // let next =a+b;
        // console.log(next);
        // a=b;
        // b=next;
    // }
// }
// fibonacci(5);


// function isPrime(num) {
    // if(num<=1){
        // return false;
    // }
    // for(let i=2; i<= Math.sqrt(num);i++){
        // if(num % i === 0){
            // return false;
        // }
    // }
    // return true;
// }
// console.log(isPrime(7));


// function removeDuplicates(arr){
    // const uniqueElements =[];
    // for (let i = 0; i<arr.length; i++){
        // if(!uniqueElements.includes(arr[i])){
            // uniqueElements.push(arr[i]);
        // }
    // }
    // return uniqueElements;
// }
// console.log(removeDuplicates([1,2,2,3,4,4,5]));


// function transposeMatrix(matrix){
    // const rows = matrix.length;
    // const cols = matrix[0].length;
    // const transposed = [];
    // for(let j=0; j<cols; j++){
        // transposed.push([]);
        // for(let i=0; i<rows;i++){
            // transposed[j].push(matrix[i][j]);
        // }
    // }
    // return transposed;
// }
// console.log(transposeMatrix([[1,2],[3,4]]));


// function countOccurrences(arr){
//     const counts = {};
//     for (let i=0; i< arr.length; i++){
//         const element = arr[i];
//         counts[element]=(counts[element] || 0) +1;
//     }
//     return counts;
// }
// console.log(countOccurrences([1,2,2,3,3,3]));


// function multiplicationTable(n) {
//     for(let i =1; i<=n; i++){
//         for(let j=1; j<=n; j++){
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//     }
// }
// multiplicationTable(3);


// function sumOfDigits(num){
//     let sum = 0;
//     let tempNum=Math.abs(num);
//     while (tempNum > 0){
//         sum += tempNum %10;
//         tempNum = Math.floor(tempNum / 10);
//     }
//     return sum;
// }
// console.log(sumOfDigits(1234));


// function printPattern(n){
//     for (let i=1; i<=n; i++){
//         let row = "";
//         for (let j=1; j<=i; j++){
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// printPattern(3);


// function findCommonElements(arr1, arr2){
//     const commonElements = [];
//     for (let i=0; i< arr1.length; i++){
//         for(let j=0; j< arr2.length; j++){
//             if (arr1[i] === arr2[j]){
//                 if (!commonElements.includes(arr1[i])){
//                     commonElements.push(arr1[i]);
//                 }
//                 break;
//             }
//         }
//     }
//     return commonElements;
// }
// console.log(findCommonElements([1,2,3], [2,3,4]));


// function isPalindromeNumber(num) {
//     if (num <0){
//         return false;
//     }
//     let originalNum = num;
//     let reversedNum = 0;
//     while(num>0){
//         const digit = num % 10;
//         reversedNum = reversedNum *10 + digit;
//         num= Math.floor(num / 10);
//     }
//     return originalNum === reversedNum;
// }
// console.log(isPalindromeNumber(121));


// function findGCD(a,b){
//     a=Math.abs(a);
//     b=Math.abs(b);
//     while (b !== 0){
//         let temp = b ;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// console.log(findGCD(48,18));