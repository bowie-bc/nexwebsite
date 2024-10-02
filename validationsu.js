const form1 = document.getElementById('form');

form1.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputsignup();
});

function validateInputsignup(){
    validateFName();
    validateLName ();
    validateUsername();
    validateEmail();
    validateCNum();
    validatePW();
    verifyPW();

}

function validateFName () {
    const fname = document.getElementById('fname').value;

    if(fname.length == ""){
        fnameerror.innerHTML="First name is required!";
    }
    else if(fname.length > 20){
        fnameerror.innerHTML="First name is too long!";
    }
    else if(fname.length < 2){
        fnameerror.innerHTML="First name is too short!";
    }
    else{
        fnameerror.innerHTML="";
    } 

}

function validateLName () {
    const lname = document.getElementById('lname').value;

    if(lname.length == ""){
        lnameerror.innerHTML="Last name is required!";
    }
    else if(lname.length > 20){
        lnameerror.innerHTML="Last name is too long!";
    }
    else if(lname.length < 2){
        lnameerror.innerHTML="Last name is too short!";
    }
    else{
        lnameerror.innerHTML="";
    } 

}

function validateUsername () {
    const username = document.getElementById('username').value;

    if(username.length == ""){
        usernameerror.innerHTML="Username is required!";
    }
    else if(username.length > 20){
        usernameerror.innerHTML="Username is too long!";
    }
    else if(username.length < 8){
        usernameerror.innerHTML="Username is too short!";
    }
    else{
        usernameerror.innerHTML="";
    } 

}

function validateEmail () {
    const email = document.getElementById('email').value;

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailerror.innerHTML = 'Email is invalid!';
    }
    else if(email.length == ""){
        emailerror.innerHTML="Email is required!";
    }
    else if(email.length < 5){
        emailerror.innerHTML="Email is too short!";
    }
    else{
        emailerror.innerHTML="";
    } 

}

function validateCNum () {
    const cnum = document.getElementById('cnum').value;

    if(cnum.length == ""){
        cnumerror.innerHTML="Contact number is required!";
    }
    else if(cnum.length != 10){
        cnumerror.innerHTML="Contact number is invalid!";
    }
    else{
        cnumerror.innerHTML="";
    } 

}

function validatePW(){
    const pw = document.getElementById('pw').value;

    if(pw.length == ""){
        pwerror.innerHTML="Password is required!";
    }
    else if(pw.length < 8){
        pwerror.innerHTML="Password is too short!";
    }
    else if(pw.search(/[a-z]/) < 0){
        pwerror.innerHTML="Password must contain at least one lowercase letter!";
    }
    else if(pw.search(/[A-Z]/) < 0){
        pwerror.innerHTML="Password must contain at least one uppercase letter!";
    }
    else if(pw.search(/[0-9]/) < 0){
        pwerror.innerHTML="Password must contain at least one uppercase letter!";
    }
    else{
        pwerror.innerHTML="";
    }

}

function verifyPW(){
    const pw = document.getElementById('pw').value;
    const vpw = document.getElementById('vpw').value;

    if(pw != vpw){
        vpwerror.innerHTML="Password is not the same!";
    }

    else{
        vpwerror.innerHTML="";
    }

}


