// ******************************** Task 1 ********************************
// function getPromise(text, timeout) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(text);
//       }, timeout);
//     });
//   }
  
//   getPromise('Test Promise', 2000).then((data) => {
//     console.log(data);
//   });

// ******************************** Task 2 ********************************

// let array = [];
// let result = 1;

// function multiplication(array) {

// return new Promise((resolve, reject) => {
//     for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         result *= array[i];} 
//     else {
//         reject('Error');
//         return;}
//     }
//     resolve(result);
//   });
// }

// multiplication([1, 2, 3]).then((data) => {console.log(data);})
//                          .catch((err) => {console.log(err);});


// ******************************** Task 3 ******************************** не виводить кожен елемент окремо 

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// function returnNumbers(array) {

// return new Promise((resolve, reject) => {
// for (let i = 0; i <= array.length-1; i++) {
// setTimeout(() => { console.log(numbers[i]) }, 4000)}
// } 
// )
// }

// returnNumbers(numbers).then((data) => {console.log(data);})


