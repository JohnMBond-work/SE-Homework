//W2_HW2_Funcitons


//1. maxOfTwoNumbers=====================================

// let a = 15;
// let b = 5;
//
//
// if (a > b) {
//     console.log(a + " is greater than " + b);
// }
// else if (a < b) {
//     console.log(b + " is greater than " + a);
// }
//
// else if (a == b) {
//     console.log("Both numbers are equal");
// }


//2. maxOfThree=============================================

// function maxOfThree(num1,num2,num3){
//   let largest; // Variable set here
//   if (num1 >= num2 && num1 >= num3) {
//       largest = num1;
//   }
//   else if (num2 >= num1 && num2 >= num3) {
//       largest = num2;
//   }
//   else {
//       largest = num3;
// }
// return largest
// }
// // Input / Output
// console.log(maxOfThree(5,2,9))


// 3. isCharacterAVowel===================================================

// function isCharacterAVowel(character){
//   if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
//   return true}
//   else{
//     return false
//   }
// }
// console.log(isCharacterAVowel("u"))


// 4. sumArray & multiplyArray=========================================

// //sumArray
// function sumArray(numbers){
//   let sum=0
//   for(i=0; i<numbers.length; i++){
//     sum = sum + numbers[i]
//   }
//   return sum
// }
// console.log(sumArray([1,2,3,4]))
//
// //multiplyArray
// function multiplyArray(numbers){
//   let product=1
//   for(i=0; i<numbers.length; i++){
//     product = product * numbers[i]
//   }
//   return product
// }
// console.log(multiplyArray([1,2,3,4]))


// 5. Number of arguments passed to the function when called=============

// function function1() {}
//
// function function2(a, b, c) {}
//
// console.log (function1.length)
// console.log (function2.length)


// 6. reverseString==================================================

// const reverseString = (arr) => {
//   let sortedArr = arr.sort().reverse() //sorts array in numberical order then reverses so highest number is now first in the array
//   return sortedArr[0] // memory slot for first item in the array
// }
// // Input / Output
// let trial1 = [1,4,2]
// let trial2 = [7,8,3]
// console.log("the highest number of " + trial1 + " is " + reverseString(trial1))
// console.log("the highest number of " + trial2 + " is " + reverseString(trial2))



// 7. findLongestWord====================================================

// function findLongestWord(str) { // created function named findLongestWord
//   var strSplit = str.split(' '); //created var, named it strSplit and assigned it str.split to seperate the words via the spaces between them
//   var longestWord = 0; // created var, named it longestWord with value of 0 to be added to via the upcoming for loop
//   for(var i = 0; i < strSplit.length; i++){ // created for loop to compare length of the words to the memory slots it inhabits and adds 1 to the index to check next word in that slot
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length; // if strSplit length assigned to index number is greater than the value of longestWord, longestWord will be updated to a value of that index's word length
//      }
//   }
//   return longestWord; // returns the value set to longestWord in line 107, which is a child function, to the parent function variable on line 104
// }
//
// console.log (findLongestWord("I struggle with coding from time to time")); //provides input to the parent function on line 102


// // 8. filterLongWords==================================================
//
// let i = 6 // i assigned value sets filter limit in function "word"
// var arrayInput = ["I","struggle","with","coding","from","time","to","time"]; //created varieable named arrayInput and assigned it words as the input source
// var arrayCleaned = arrayInput.filter( function( filterLongWords ) {
//   return filterLongWords.length >= i;
// }); //created variable arrayCleaned to .filter the variable arrayInput from line 119, into a function named filterLongWords which returns any words in arrayInput from line 119 that are greater or equal to the length assigned to i in line 118, changing the value of arrayCleaned on line 120
// console.log(arrayCleaned); //prints the value of arrayCleaned from line 120
