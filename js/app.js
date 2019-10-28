const mobMenu = document.querySelector('.mobMenu');
const mobMenuList = document.querySelector("nav ul");


  mobMenu.addEventListener("click", myFunc);


function myFunc() {
  console.log("clicked");
  mobMenuList.classList.toggle("mobMenuList-active");
}

