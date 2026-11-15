
function login_btn(e){
    e.preventDefault();

   const userEmail = document.getElementById("email").value.trim();
    const passWord = document.getElementById("userPass").value;
    let createAcc = document.getElementById("signUp");

    const emailId ="test@gmail.com";
    const securePassword = "1234";
    let alertBox;

    if(userEmail === emailId && securePassword === passWord){
        sessionStorage.setItem("loggedin", "true");
        setTimeout( ()=> {
            window.location.replace("dashboard.html");
             alertBox = document.getElementById("displayMsg").textContent = `Sucessfully Login`;
            return;
        }, 1000 )
         alertBox.style.color ="green";
    } 
    else if(userEmail ===""){
        alertBox = document.getElementById("displayMsg").textContent = `Please enter your email`;
        return;
    }

    else if(userEmail === "." ){
        alertBox = document.getElementById("displayMsg").textContent = `Please check you email`;
        return;
    }
    else if(passWord === ""){
        alertBox = document.getElementById("displayMsg").textContent = `Please enter your password`;
    }
    
    
    else {
        alertBox = document.getElementById("displayMsg").textContent =`Please carefully enter your credential`;
    }


    createAcc.addEventListener("click", () => {
        window.location.replace("sign_up.html");
    })


}

