const emailRegex = /\w+@\w+\.com/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

const errorValidateEmail = document.getElementById("validateEmail");
const errorValidatePassword = document.getElementById("validatePassword");
const errorValidateAll = document.getElementById('validateAll');

const emailItem = document.getElementById("email");
const passwordItem = document.getElementById("password");

function handleLogin() {
    if(!emailItem.value) {
        errorValidateEmail.innerHTML = "Email is not emptry"
    }

    if(!emailRegex.test(emailItem.value)) {
        errorValidateEmail.innerHTML = "Email is not emptry"
        
    }
    if (!emailItem.value || !passwordItem.value) {
        errorValidateAll.innerHTML = "Please enter your email and password"
    }

    if (!passwordItem.value) {
        errorValidatePassword.innerHTML="Password is not emptry"
    }
    if (!passwordRegex.test(passwordItem.value)) {
        errorValidatePassword.innerHTML="Password is not emptry"
    }
   
        window.open("./index.html");
    

}


    




    
    



