
function login_btn(e){
    e.preventDefault();

   const userEmail = document.getElementById("email").value.trim();
    const passWord = document.getElementById("userPass").value;

    let emailId ="test@gmail.com";
    let securePassword = "1234";
    let errorSms;

    if(userEmail === emailId && securePassword === passWord){
        errorSms = document.getElementById("displayMsg").innerHTML = `Sucessfully Login`;
        errorSms.style.color="green";
    } 
    else if(userEmail ===""){
        errorSms = document.getElementById("displayMsg").innerHTML = `Please enter your email`;
    }

    else if(userEmail === "." ){
        errorSms = document.getElementById("displayMsg").innerHTML = `Please check you email`;
    }
    else if(passWord === ""){
        errorSms = document.getElementById("displayMsg").innerHTML = `Please enter your password`;
    }
    
    
    else {
        errorSms = document.getElementById("displayMsg").innerHTML =`Please carefully enter your credential`;
        errorSms.style.color ="green";
        console.log("Enter your creditial carefully");
    }

if(sessionStorage.getItem("LoggedIn") !== "true" ){
    window.location.replace("index.js");
}

}

function create_account(e){
    console.log("hello developer");

    
}