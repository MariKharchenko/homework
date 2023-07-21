// // ****************************************** Task 1 ******************************************

// const calculation = require('./HW13.js');

// describe('calculation test', () => {
//   test('0.1 + 0.2 equal to 0.3', () => {
//   expect(calculation(0.1, 0.2)).toBe(0.3);
//   });
// });

// // ****************************************** Task 2 ****************************************** 
        
// const userList = require('./HW13.js');

// describe('user list check', () => {

//     test('consist admin element', () => {
//         expect(userList).toContain('admin');
//     });

//     test('the first element is Nick', () => {
//         expect(userList[0]).toContain('Nick');
//     });

//     test('the last element is new_user_2', () => {
//         expect(userList[userList.length-1]).toContain('new_user_2');
//     });

//     test('array length is 5', () => {
//         expect(userList.length).toBe(5);
//     });

//     test('type of 3rd element is String', () => {
//         expect(typeof(userList[2])).toBe('string');
//     });

//     test('8 element is not present', () => {
//         expect((userList[8])).toBeUndefined;
//     });
// });


// // ****************************************** Task 3 ******************************************

// const { getCircleArea, getCircleLength } = require('./HW13.js');

// describe ('circle calculations', () => {

//     test ('circle length with 22 arg is equal to 138.2', () => {
//         expect(getCircleLength(22)).toBe(138.2)  
//         }); 

//     test ('circle area with 9 arg is equal to 254.47', () => {
//         expect(getCircleArea(9)).toBe(254.47);  
//         });

//     test ('circle length with undefined area', () => {
//         expect(getCircleLength()).toBeUndefined;  
//         });
    
//     test ('circle area with undefined radius', () => {
//         expect(getCircleArea()).toBeUndefined;  
//         });

// });


// // ****************************************** Task 4 ******************************************

const { filterFoodPrice, food, foodSorted } = require('./HW13.js');

describe ('food price filter', () => {

    test ('sorted length of the array with min and max values', () => {
    expect(filterFoodPrice(food, 12, 40).length).toBe(3);
    });

    test ('pepper presence in sortet array', () => {
        expect(filterFoodPrice(food, 12, 40)).toContain(food[2]);
    });

    test ('2nd element presence in sortet array', () => {
        expect(filterFoodPrice(food, 12, 40)).toContain(food[2]);
    });

    test ('3rd element presence in sortet array', () => {
        expect(filterFoodPrice(food, 12, 40)).toContain(food[3]);
    });

    // test ('4th element presence in sortet array', () => {
    //     expect(filterFoodPrice(food, 12, 40)).toContain(food[4]); // failed - expected
    // });

    test ('1th element > than min', () => {
        expect(foodSorted[0].price).toBeGreaterThan(12);
    });

    test ('3th element < than max', () => {
        expect(foodSorted[2].price).toBeLessThan(40);
    });

    test ('lemon element is missing', () => {
        expect(food[4]).toBeUndefined;
    });

    test ('lemon price > banana price', () => {
        expect(food[4].price).toBeGreaterThan(food[3].price); });
    });

    
    

