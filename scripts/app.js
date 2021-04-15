"use strict"

// TO GET THE NAV LINKS TO SHOW ON CLICKING THE HAMBURGER ICON
// Grab the hamburger with JavaScript
let btn = document.getElementById('btn');

// To toggle between adding and removing the showNavLinks class when the hamburger button clicked
btn.addEventListener('click', function (){
    document.getElementById('navLinkContainer').classList.toggle('showNavLinks');
})

// TO MAKE THE NAVBAR STICKY ON SCROLL
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}