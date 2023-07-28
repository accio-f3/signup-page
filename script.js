const signupBtn = document.getElementById('signupBtn');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const loginRedirect = document.getElementById('loginRedirect');

function checkIfUserExist(email){
    let users = JSON.parse(localStorage.getItem('users'));
    // users will be array of objects
    const obj = users.find(userObj=>{
        return userObj.email === email;
        // if obj with email is exist 
    })
    if(obj) return true;
    else return false;
}

function saveUser(fName,lName,emailInput,passwordInput){
    let userObj ={
        firstName: fName, // firstName.value
        lastName: lName,
        email: emailInput,
        password: passwordInput,
    }
    let users = JSON.parse(localStorage.getItem('users'));
    if(users === null){
        users = [];
    }
    users.push(userObj); // i pushed my users in users array
    localStorage.setItem('users',JSON.stringify(users)); // updated it in localStorage

    //  write a logic that this user is signed in
    // session storage will delete data after tab is closed
    sessionStorage.setItem('loggenInUser',JSON.stringify(userObj));
    firstName.value='';
    lastName.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';
    alert('sign up successful');
    // this is how we handle multiple pages
    // this will redirect to profile folder
    window.location.href='./profile';
}

signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // if any of my field is empty
    if (firstName.value.trim() === '' ||
        lastName.value.trim() === '' ||
        email.value.trim() === '' ||
        password.value.trim() === '' ||
        confirmPassword.value.trim() === '') {
        alert('all fields are mandatory');
    }
    else {
        if (password.value.trim() !== confirmPassword.value.trim()) {
            alert('password not matching');
            password.value = '';
            confirmPassword.value = '';
        } else {
            // if my user exist
            if (localStorage.getItem('users')) {
                if (checkIfUserExist(email.value)) {
                    alert('email is linked with other account');
                } else {
                    saveUser(firstName.value, lastName.value, email.value, password.value);
                }
            } else {
                saveUser(firstName.value, lastName.value, email.value, password.value);
            }
        }
    }
})

loginRedirect.addEventListener('click',()=>{
    location.href='./login';
})

// 1st -> users -> 0
// 2nd -> users -> 20

// [{},{},{},{}];