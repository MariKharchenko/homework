
//******************************** Task 1 ******************************** OK

// function rectangleArea(width, height) {
//     if (typeof(width) !== 'number' || typeof(height) !== 'number') {
//     throw new Error('Invalid parameters type.');};
//     console.log(width * height);
// }

// try {rectangleArea(2, 6)}
// catch (e) {console.log(e.message)}; // the area is calculated

// try {rectangleArea('width', 4)}
// catch (exception) {console.log(exception.message)}; // Invalid parameters type.

// try {rectangleArea(true, 4)}
// catch (exception) {console.log(exception.message)}; // Invalid parameters type.

//******************************** Task 2 ******************************** OK

// let age = Number(prompt('Enter your age:'));

// function checkAge(age) {
// if (age === 0) {throw new Error('The field is empty! Please enter your age.')}
// else if (isNaN(age) === true) {throw new Error('Please, enter a number.') }
// else if (age < 14) {throw new Error('You are too young to watch this film.')}
// else {alert('Enjoy the film.')}
// return age;
// }

// try {checkAge(age)} catch (e) {alert(e.message)};
// try {checkAge(age)} catch (e) {console.log(e.name)};
// try {checkAge(age)} catch (e) {console.log(e.stack)};

//******************************** Task 3 ******************************** OK

// class MonthException {
//     constructor(message) {
//       this.name = 'MonthException';
//       this.message = message;
//     }
//   }
  
//   function showMonthName(month) {
//     switch (month) {
//       case 1:
//         return 'January';
//       case 2:
//         return 'February';
//       case 3:
//         return 'March';
//       case 4:
//         return 'April';
//       case 5:
//         return 'May';
//       case 6:
//         return 'June';
//       case 7:
//         return 'July';
//       case 8:
//         return 'August';
//       case 9:
//         return 'September';
//       case 10:
//         return 'October';
//       case 11:
//         return 'November';
//       case 12:
//         return 'December';
//       default:
//         throw new MonthException('Incorrect month number.');
//     }
//   }
  
//   try {
//     let month = Number(prompt('Enter your number: '));
//     console.log('Your month is ' + showMonthName(month));
//   } catch (exception) {
//     console.log(exception.message);
//   }


//******************************** Task 4 ******************************** (not completed)
// let user1 = {
//     id: 123,
//     name: 'John',
//     age: 20}

// let user2 = {
//     id: 456,
//     name: 'Jane',
//     age: 21}

// let user3 = {
//     id: 789,
//     name: 'Mike',
//     age: 22}

//  function showUser(id) {
//     switch (id) {
//         case 123:
//             return (user1.name + ', age: ' + user1.age);
//         case 456:
//             return (user2.name + ', age: ' + user2.age);
//         case 789:
//             return (user3.name + ', age: ' + user3.age);
//         default:
//             throw new Error('Incorrect user id.');
//  } }

//  try{
//     console.log('Show user: ' + showUser(123)) }
//     catch(e) {console.log(e.message)};




