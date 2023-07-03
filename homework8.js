// ******************************** Task 1 ********************************
// let arr = ["Tom", "Sam", "Ray", "Bob"]; 
// let [x, y, , z] = arr;  
// console.log(x); // "Tom" 
// console.log(y); // "Sam" 
// console.log(z); // [Bob] 

// ******************************** Task 2 ********************************

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//   };
  
//   let { names: [names1, names2, ...restNames], ages: [ages1, ages2, ages3, ages4] } = data;
  
//   console.log(names2); // "Tom"
//   console.log(ages2); // 24
//   console.log(restNames[1]); // "Ray"
//   console.log(ages4); // 26

// ******************************** Task 3 ********************************

// let array = [];
// let result = 1;   

// function mul(array) {
// for (let i = 0; i < array.length; i++) 
// {
// if (typeof(array[i]) === 'number') {
//     result *= array[i];
//  }
// } 
// return result 
// }

// console.log(mul([1,4,5, 'Marina']));

// ******************************** Task 4 ********************************
// let server = {
//     data: 0,
//     convertToString: function(callback) {
//       callback(() => {
//         return this.data + "";
//       });
//     }
//   };
  
//   let client = {
//     server: server,
//     result: "",
//     calc: function(data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//     },
//     notification: function() {
//       return callback => {
//         this.result = callback();
//       };
//     }
//   };
// client.calc(123); 
// console.log(client.result); // "123" 
// console.log(typeof client.result); // "string" 

// ******************************** Task 5 ********************************

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];

// function mapBuilder(keys, values) {
//   const map = new Map();
//   for (let i = 0; i < keys.length; i++) {
//   map.set(keys[i], values[i]);
//   }
//   return map;
// }

// const map = mapBuilder(keys, values);

// console.log(map.size); // 4
// console.log(map); 
// console.log(map.get(2)); // "span" 