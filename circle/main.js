
function login_btn(e){
    e.preventDefault();

   const userEmail = document.getElementById("email").value.trim();
    const passWord = document.getElementById("userPass").value;

    let emailId ="test@gmail.com";
    let securePassword = "1234";
    let errorSms;

    if(userEmail === emailId && securePassword === passWord){
        errorSms = document.getElementById("displayMsg").innerHTML = `Sucessfully Login`;
        console.log(`Login Sucessfully`);

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
        console.log("Enter your creditial carefully");
    }



    setInterval(() => {

        sessionStorage.setItem("Logged In", "true");
        window.location.replace("dashboard.html");
    },1000 );

    if(sessionStorage.setItem("LoggedIn") !== "true"  ){
         window.location.replace("index.html");
    }
  


}

function create_account(e){
    console.log("hello developer");

    
}