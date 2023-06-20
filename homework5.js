// //***************************** Task 1 ***************************** OK
// let pets = {
//     name: 'Margo',
//     age: 2,
//     color: 'black'
// };
// let pets1 = {
//     name: 'Tom',
//     age: 3,
//     color: 'black',
//     alergic: true
// };
// function countKeys(object) {
// let count = Object.keys(object).length;
// return count;
// };
// console.log('Number of properties is ' + countKeys(pets));
// console.log('Number of properties is ' + countKeys(pets1));


// //***************************** Task 2 ***************************** OK

// function objectInfo(object) {
// let keysArray = Object.keys(object);
// let valuesArray = Object.values(object);

// console.log('Your object keys are: ' + keysArray);
// console.log('Your object values are: '  + valuesArray);
// }

// const fruits = {
//     banana: 100,
//     apple: 2,
//     kiwi: 'green',
//     orange: 1, 
//     }; 

// objectInfo(fruits);

// //***************************** Task 3 ***************************** OK

// class Person {
//     constructor(name, surname)
//     {
//         this.name = name;
//         this.surname = surname; 
//      }
    
// showFullName() 
//     {
//     return ('Full name: ' + this.name + ' ' + this.surname);
//     }
// }

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();

// class Student extends Person {
// constructor(name, surname, middlename, year) 
// {
// super(name, surname);
// this.middlename = middlename;
// this.year = year;
// this.currentYear = currentYear;
// }
// showFullName() 
//     {
//     return ('Full name: ' + this.name + ' ' + this.middlename + ' ' + this.surname);
//     };
// showCourse() 
//     {
//     return ('Course: ' + (this.currentYear - this.year));
//     };
// }

// const student1 = new Student('Maryna', 'Kharchenko', 'Oleksandrivna', 2020);
// console.log(student1.showFullName());
// console.log(student1.showCourse());

  // //***************************** Task 4 ***************************** sorting not completed
  
  // class Worker {
  //   constructor(fullName, dayRate, workingDays) {
  //     this.fullName = fullName;
  //     this.dayRate = dayRate;
  //     this.workingDays = workingDays;
  //     this._experience = 1.2;
  //   }
  //   showSalary() {
  //       return (this.dayRate * this.workingDays);
  //   }

  //   showSalaryWithExperience() {
  //       return (this.dayRate * this.workingDays * this._experience); 
  //   }
    
  //   get experience() {
  //     return this._experience;
  //   }
  
  //   set experience(value) {
  //     this._experience = value;
  //   }
  
  //   showSalaryWithNewExperience() {
  //       return (this.dayRate * this.workingDays * this.experience); 
  //   }
  // }

  // let worker1 = new Worker ('Maryna Kharchenko', 500, 14);

  // worker1.experience = 1.5; // виклик сеттера
  // console.log(worker1.fullName + ': ' + worker1.showSalary());
  // console.log('Salary with experience: ' + worker1.showSalaryWithExperience());
  // console.log('New Experience: ' + worker1.showSalaryWithNewExperience());


  // let worker2 = new Worker ('Oleksandr Us', 600, 18);
  
  // console.log(worker2.fullName + ': ' + worker2.showSalary());
  // console.log('Salary with experience: ' + worker2.showSalaryWithExperience());
  // console.log('New Experience: ' + worker2.showSalaryWithNewExperience());

  // let worker3 = new Worker ('Yaroslav Us', 700, 20);

  // console.log(worker3.fullName + ': ' + worker3.showSalary());
  // console.log('Salary with experience: ' + worker3.showSalaryWithExperience());
  // console.log('New Experience: ' + worker3.showSalaryWithNewExperience());

// //***************************** Task 5 *****************************
  
// class GeometricFigure { 

//   getArea() 
// { 
//   return 0; }  
// } 

// class Triangle extends GeometricFigure {
//   constructor(a, b) {
//   super();
//   this.a = a;
//   this.b = b;
// }
// getArea() {return ((this.a * this.b) / 2)}
// }

// class Square extends GeometricFigure {
//   constructor(b) {
//   super();
//   this.b = b;
// }
// getArea() {return this.b * this.b}
// }


// class Circle extends GeometricFigure {
//   constructor(r) {
//   super();
//   this.r = r; 
// }
// getArea() {return Math.PI * this.r * this.r}
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

// let sum = 0;
// for (let i = 0; i < figures.length; i++) {
//     sum += figures[i].getArea();

// console.log('Area of Figure ' + (i + 1) + ': ' + figures[i].getArea());
// }
// console.log('Sum of all areas: ' + sum);





