
//both mobile and tablet hamburger menu
const sideBar = document.getElementById("sideMenu");
const openBtn = document.getElementById("hamBurger");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", ()=> {
    sideBar.classList.add("open");
});


closeBtn.addEventListener("click", ()=> {
    sideBar.classList.remove("open");
});


//mobile search page
const searchpage = document.getElementById("searchPage");
const searchbtn = document.getElementById("mobile_searchBtn");
const backbtn = document.getElementById("backBtn");

searchbtn.addEventListener("click", (e)=> {
    e.preventDefault('true');
    searchpage.classList.add("open");
});


backbtn.addEventListener("click", ()=> {
    searchpage.classList.remove("open");
});


//tablet search page
const tablet_searchpage = document.getElementById("searchPage");
const tablet_searchbtn = document.getElementById("tablet_searchBtn");
const tablet_backbtn = document.getElementById("backBtn");

tablet_searchbtn.addEventListener("click", (e)=> {
    e.preventDefault('true');
    tablet_searchpage.classList.add("open");
});


tablet_backbtn.addEventListener("click", ()=> {
    tablet_searchpage.classList.remove("open");
});

//To Top
const scrollTop = document.getElementById("scrollBtn");

scrollTop.addEventListener("click", (e) => {
   window.scrollTo({
    top: 0,
    behavior: "smooth",
   })
});



//Posting Comment
document.getElementById("submitBtn").onclick = function(){
    
    let username;
    username = document.getElementById("userName").value;
    email = document.getElementById("email").value;
    textbox = document.getElementById("textBox").value;

    if(username ===""){
        document.getElementById("displayMessage").textContent =
        "Please enter your username.";
    } 

    else if(email === ""){
        document.getElementById("displayMessage").textContent =
        "Please enter your email address.";
    }

    else if(textbox === ""){
        document.getElementById("displayMessage").textContent =
        "Please enter your message.";
    }
    
    else{
        document.getElementById("displayMessage").textContent =
        "Thanks for messaging us " + username + "!";
    }
    
}


