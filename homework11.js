// *************************** Task 1 ***************************
// let voteButton = document.getElementById('button');
// voteButton.addEventListener('click', function() {

// let currentTimeInUkraine = new Date();
// voteButton.textContent = 'Your vote is accepted: ' + currentTimeInUkraine;
// })

// *************************** Task 2 ***************************

let bookButton = document.getElementById('button');
bookButton.addEventListener('click', function() {
fetch("./books.json").then((response) => response.json())
                     .then((data) => data.map((books) => console.log(books.name)))})




