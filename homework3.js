//******************************** Task 1 ********************************

// //for loop:
// let arrayOfNumbers = [2,3,4,5];
// let result = 1; // variable for calculation within the loop
// for (let i = 0; i < arrayOfNumbers.length; i++) {
// maltiplication = result *= arrayOfNumbers[i];
//  }
// console.log('The result of Arrays elements multiplication is ' + maltiplication);

// //while loop:
// let arrayOfNumbers1 = [2,3,4,5];
// let multiplication1 = 1; // variable for calculation within the loop
// let i = 0; // variable for condition
// while(i <= 3) {
// result1 = multiplication1 *= arrayOfNumbers1[i];
// i++
// };
// console.log('The result of Arrays elements multiplication is ' + result1);

//******************************** Task 2 ********************************

// for (i = 0; i <= 15; i++) {
//     let remainder = i % 2; // odd or even number checking
//     if (remainder == 0) {console.log(i + ' is even.')}
//     else {console.log(i + ' is odd.')};}

// //******************************** Task 3 ********************************
        
// function randomNumbers() {
//     let k = [];
//     for (let i = 0; i < 5; i++) {
//         let numbers = Math.floor(Math.random() * 500);
//         k.push(numbers);}
//         return(k);}
// let k = randomNumbers();
// console.log(k);


// //******************************** Task 4 ********************************
// function raiseToDegree(a,b) {
//     let result = a ** b;
//     return result;}

// let a = Number(Math.floor(prompt('Enter a: ')));
// let b = Number(Math.floor(prompt('Enter b: ')));
// console.log(raiseToDegree(a,b));

// //******************************** Task 5 ********************************

// let myArray = [];
// function minNum() {
// let min = Math.min(...(myArray));
// return min;}
// myArray.push(prompt('Number 1:'));
// myArray.push(prompt('Number 2:'));
// myArray.push(prompt('Number 3:')); 
// // or simple Array:
// // myArray.push(1,6,7,12,-1);
// console.log('Your smalest number is ' + minNum());

// //******************************** Task 6 ********************************

// function findUnique(arr) {
// return arr.length === new Set(arr).size;} // Set - method of Array that includes only unique elements of copied Array

// let myArray = [1, 2, 3, 4, 5];
// console.log(findUnique(myArray)); // true
// let duplicateArray = [1, 2, 3, 4, 4, 5];
// console.log(findUnique(duplicateArray)); // false


// //******************************** Task 7 ********************************

// function lastElem(initialArray, x = 1) {
// if(x >= initialArray.length) {console.log(initialArray)}
// else {let newArray = initialArray.slice(-x);
// console.log(newArray);}}

// lastElem([3, 4, 10, -5]);
// lastElem([3, 4, 10, -5], 2);
// lastElem([3, 4, 10, -5],8);

// //******************************** Task 8 ********************************

// function uppercase(stringMaryna) {
//     for (i = 0; i <= stringMaryna.length; i++) {
//     stringMaryna1 = stringMaryna.toUpperCase();
//     console.log(stringMaryna1);
//  }
// }
// uppercase('i love javascript');

