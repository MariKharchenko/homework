// // ***************************** Task 1 ***************************** 

// let newWindow = window.open('https://www.google.com', 'google', 'height=300, width=300, left=200, top=200'); 
// setTimeout(function() {
//     newWindow.resizeTo(500, 500);
// }, 2000);
// setTimeout(function() {
//     newWindow.moveTo(200, 200);
// }, 4000);
// setTimeout(function() {
//     newWindow.close();
// }, 6000);

// // ***************************** Task 2 ***************************** 

// function changefunction() {
// let title = document.getElementById('text');
// title.style.color = 'orange';
// title.style.fontSize = '20px';
// title.style.fontFamily = 'Comic Sans MS';
// }

// let title = document.querySelector('button');
// title.addEventListener('click', function() {
//     changefunction();})

// // ***************************** Task 3 ***************************** 

//     let blueButton = document.getElementById('button1');
// blueButton.addEventListener('click', function() {
//     let background1 = document.body.style.backgroundColor = 'blue';
// });

//     let pinkButton = document.getElementById('button2');
// pinkButton.addEventListener('dblclick', function() {
//     let background2 = document.body.style.backgroundColor = 'pink';
// });

//     let brownButton = document.getElementById('button3');
// brownButton.addEventListener('mousedown', function() {
//     let background3 = document.body.style.backgroundColor = 'brown';
// });
// brownButton.addEventListener('mouseup', function() {
//     let background3 = document.body.style.backgroundColor = 'white';
//     });

//     let yellowButton = document.getElementById('button4');
// yellowButton.addEventListener('mouseover', function() {
//     let background4 = document.body.style.backgroundColor = 'yellow';});
// yellowButton.addEventListener('mouseout', function() {
//     let background4 = document.body.style.backgroundColor = 'white';});

// // ***************************** Task 4 ***************************** 

// let button = document.getElementById('myButton');
// let userChoice = document.getElementById('mySelect');

// button.addEventListener('click', function() {
// let selectedIndex = userChoice.selectedIndex;
    
//     switch (selectedIndex) {
//         case 0:
//             userChoice[0].remove();
//             break;
//         case 1:
//             userChoice[1].remove();
//             break;
//         case 2:
//             userChoice[2].remove();
//             break;
//         case 3:
//             userChoice[3].remove();
//             break;
//     }
// });

// // ***************************** Task 5 ***************************** 

// let button = document.getElementById('button');

// button.addEventListener('mouseover', function()
// {console.log('Mouse on me!')} );

// button.addEventListener('mouseout', function()
// {console.log('Mouse is not on me!')} );

// button.addEventListener('click', function()
// {console.log('I was pressed!')} );
    
// // ***************************** Task 6 ***************************** 

// let windowSize = window.innerHeight + ' ' + window.innerWidth;
//     console.log('Window size is: ' + windowSize);

//     window.addEventListener('resize', function() {
//     location.reload() });