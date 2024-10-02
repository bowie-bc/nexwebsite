const form2 = document.getElementById('form');


form2.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputlogin();
});

function validateInputlogin(){
    validateUsername();
    validatePW();
}

function validateUsername () {
    const username = document.getElementById('username').value;

    if(username.length == ""){
        usernameerror.innerHTML="Username is required!";
    }
  
    else{
        usernameerror.innerHTML="";
    } 

}

function validatePW(){
    const pw = document.getElementById('pw').value;

    if(pw.length == ""){
        pwerror.innerHTML="Password is required!";
    }
    
    else{
        pwerror.innerHTML="";
    }

}
