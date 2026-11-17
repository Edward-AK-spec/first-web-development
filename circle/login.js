
function login_btn(e){
    e.preventDefault();

   const userEmail = document.getElementById("email").value.trim().toLowerCase();
    const passWord = document.getElementById("userPass").value;
    //let createAcc = document.getElementById("signUp");

    const emailId ="test@gmail.com";
    const securePassword = "1234";
    let alertBox;

    if(userEmail === emailId && securePassword === passWord){
        sessionStorage.setItem("loggedin", "true");
        alertBox = document.getElementById("displayMsg").style.color ="green";
        setTimeout( ()=> {
            window.location.replace("dashboard.html");
             alertBox = document.getElementById("displayMsg").textContent = `Sucessfully Login`;
            return;
        }, 1000 )
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
    //createAcc.addEventListener("click", () => {
      //  window.location.href="sign_up.html";
   // })


}


  document.getElementById("signUp").addEventListener("click", ()=> {
    setTimeout( ()=>{
        window.location.href="sign_up.html";
    },1000);
    });
