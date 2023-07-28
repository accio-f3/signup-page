const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const emailId = document.getElementById('emailID');

let currentUser = JSON.parse(sessionStorage.getItem('loggenInUser'));

fName.innerText = currentUser.firstName;
lName.innerText = currentUser.lastName;
emailId.innerText = currentUser.email;

