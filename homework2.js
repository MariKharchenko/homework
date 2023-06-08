// Task 1: 
// let x = 1; 
// let y = 2; 

// let res1 = String(x) + y;
// console.log(res1); // "12" 
// console.log(typeof res1); // "string" 

// let res2 = (x < y) + String(y);
// console.log(res2); // "true2" 
// console.log(typeof res2); // "string" 

// let res3 = x < y; 
// console.log(res3); // true 
// console.log(typeof res3); // "boolean" 

// let res4 = x/0 + -y/0;
// console.log(res4); // NaN 
// console.log(typeof res4); // "number"

// Task 2:
// let userNumber = prompt("Please, enter your number: ");
// let userNumberRemainder = userNumber % 2;

// if (userNumber > 0 && userNumberRemainder == 0) {
// console.log('Positive even number.');}
// else if (userNumber > 0 && userNumberRemainder !== 0) {
// console.log('Positive odd number.');}
// else if (userNumber < 0 && userNumberRemainder == 0) {
// console.log('Negative even number.');}
// else if (userNumber < 0 && userNumberRemainder !== 0) 
// {console.log('Negative odd number.')};

// switch (userNumber % 7) {
// case 0:
// console.log("The number is a multiple of 7.")
// break;
// default: 
// console.log("The number is NOT a multiple of 7.");
// break};

// Task 3: 
// const whatever = new Array();
// whatever[0] = '12';
// whatever[1] = 'Twelve';
// let x = 10;
// whatever[2] = x > 9;
// whatever[3] = null;
// console.log('Length of Array = ' + whatever.length);
// let useranswer = prompt('Please, add some number from 1 to 10:');
// whatever[4] = Number(useranswer);
// console.log(whatever[4]);
// whatever.shift();
// console.log(whatever); 

// Task 4: 
// let cities = ["Rome", "Lviv", "Warsaw"];
// let symbol = '*';
// let unitedCities = cities[0] + symbol + cities[1] + symbol + cities[2];
// console.log(unitedCities);

// Task 5:
// let isAdult = prompt('How old are you?');
// if (isAdult >= 18) {console.log('You are adult.')}
// else {console.log("You are too young.")}; 

// // // Task 6: перевірка на коректність даних!!!
// let side1 = Number(prompt('Please, enter the length of the first side of the triangle:'));
// let side2 = Number(prompt('Please, enter the length of the second side of the triangle:'));
// let side3 = Number(prompt('Please, enter the length of the third side of the triangle:'));

// //if (side1 != Number || side2 != Number || side3 != Number) {console.log('Incorrect Data.')}; //перевірка на коректність даних

// // to calculate trianlge area we use Heron's formula: S = √(s * (s - a) * (s - b) * (s - c)) (where s = (a + b + c) / 2):
// const triangleSemiPerimeter = (side1 + side2 + side3) / 2;
// const triangleArea = (triangleSemiPerimeter*(triangleSemiPerimeter-side1)*(triangleSemiPerimeter-side2)*(triangleSemiPerimeter-side3))**(1/2);
// const roundedTriangleArea = parseFloat(triangleArea.toFixed(3)); // rounding 3 signs after comma
// console.log(roundedTriangleArea);
// // to check if triangle is right we use theorem of Pythagoras:
// sumOfSquaredSides1 = side1**2 + side2**2;
// sumOfSquaredSides2 = side1**2 + side3**2;
// sumOfSquaredSides3 = side2**2 + side3**2;
// squaredSide1 = side1**2;
// squaredSide2 = side2**2;
// squaredSide3 = side3**2;

// if(sumOfSquaredSides1 == squaredSide3) {console.log('Rectangular Triangle.')} // use 5,13,12 values in any order (sides of right triangle)
// else if(sumOfSquaredSides2 == squaredSide2) {console.log('Rectangular Triangle.')}
// else if(sumOfSquaredSides3 == squaredSide1) {console.log('Rectangular Triangle.')}
// else {console.log('Non-Rectangular Triangle.')};  // 4, 4, 6 values in any order (sides of non-rectangular triangle)

//Task 7:
// let currentTimeInUkraine = new Date();
// let hours = currentTimeInUkraine.getHours();
// //console.log(hours);
// if(hours >= 23 && hours < 5) {console.log('Good Night.')}
// else if (hours >= 5 && hours < 11) {console.log('Good Morning.')}
// else if (hours >= 11 && hours < 17) {console.log('Good Afternoon.')}
// else if (hours >=17 && hours < 23) {console.log('Good Evening.')};