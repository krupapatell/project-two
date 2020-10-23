/* Navbar */

// get the hamburger element
var hamburger = document.getElementById("hamburger");

// get the menu element
var menu = document.getElementById("menu");

// get the overlay element
var overlay = document.getElementById("overlay");

// define toggle function
function toggleMenu() {
    //either adds of removes active class from elelmtns
    menu.classList.toggle("active");
    overlay.classList.toggle("active");


}
// execute toggle function from hamburger on click
hamburger.addEventListener("click", toggleMenu);

// execute toggle function from menu on click
menu.addEventListener("click", toggleMenu);

// exuecute toggle function from overlay on click
overlay.addEventListener("click", toggleMenu);


/* Navbar */

//accordian//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}