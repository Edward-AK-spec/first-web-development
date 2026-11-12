let userName;
let passWord;


userName = document.getElementById("userName").value;
passWord = document.getElementById("userPass").value;

function login_btn(){
    let email ="edwardak100@gmail.com";
    let securePassword = "Akq2920*";

    if(userName === email && securePassword === passWord){
        console.log(`Sucessfully Login`);

    } else {
        console.log("Please carefully enter your credentials");
    }
}