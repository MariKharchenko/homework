// ***************************** Task 1 *****************************

// let y = document.getElementsByTagName('div').innerHTML = "Last";
// console.log(y);

// let x = document.getElementById("test").innerHTML = "Last";
// console.log(x);

// ***************************** Task 2 *****************************

// let newImage = document.querySelector("img");
// newImage.src = "cat.jpg";
// let cat = document.getElementsByTagName('img');
// console.log(cat);

// // ***************************** Task 3 *****************************

// let doc = document.querySelectorAll('#text p');
// for (let i = 0; i < doc.length; i++) 
// {
// console.log('Your paragraph is: '  + doc[i].innerHTML);
// }

// // ***************************** Task 4 *****************************

// let elements = document.querySelectorAll('#list p');
// let orderedElements = [];
// orderedElements.push(elements[0]);
// orderedElements.push(elements[4]);
// orderedElements.push(elements[1]);
// orderedElements.push(elements[3]);
// orderedElements.push(elements[2]);

// for (let i = 0; i < orderedElements.length; i++) {
//     console.log('Element' + ' ' + orderedElements[i].innerHTML);
// }


// // ***************************** Task 5 ***************************** my list not ok 

// // Big Header: 
// let bigHeader = document.querySelector('h1');
// bigHeader.style.background = 'green';

// // Paragraphs:
// let headerElements = [];
// let headers = document.getElementsByTagName('p');
// headerElements.push(headers[0]);
// headerElements.push(headers[1]);
// headerElements.push(headers[2]);
// headerElements.push(headers[3]);


// for (let i = 0; i < headerElements.length; i++) {
//         console.log(headerElements[i].innerHTML);
//     }

// headerElements[0].style.fontWeight = 'bold';
// headerElements[1].style.color = 'red';
// headerElements[2].style.textDecoration = 'underline';
// headerElements[3].style.fontStyle = 'italic';

// // Remove element:
// let elem = document.querySelector('span');
// elem.remove();

// // ***************************** Task 6 *****************************

// let userAnswer1 = prompt('Please, eneter 1: ');
// let userAnswer2 = prompt('Please, eneter 2: ');
// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');
// input1.value = userAnswer1;
// input2.value = userAnswer2;


// // ***************************** Task 7 *****************************

// let newElement = document.createElement('body');
// newElement.className = 'main class';
// newElement.innerHTML = 'mainClass check item';

// let newElement1 = document.createElement('div');
// newElement1.id = 'myDiv';
// newElement1.innerHTML = '<p>First paragraph</p>';

// newElement.appendChild(newElement1);

// console.log(newElement);