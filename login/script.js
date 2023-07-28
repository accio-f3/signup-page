const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('signinBtn');
const signUpRedirect = document.getElementById('signUpRedirect');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('fields are mandatory');
    }
    else {
        let users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            let currentUser = users.find(user => {
                return user.email === email.value.trim();
            });
            if (currentUser) {
                if(password.value.trim()===currentUser.password){
                    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
                    window.location.href='../profile';
                    alert('logged in');
                }
                else{
                    alert('incorrect password');
                }
            }
            else {
                alert('you have not signed up');
            }
        }
        else {
            alert('you have not signed up');
        }
    }
})