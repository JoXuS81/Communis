/* Table of Contents
********************

1. Regulate sticky header behavior  

*/


/* Regulate sticky header behavior */
window.onscroll = function() {myFunction()};

var header = document.getElementById("home_menusticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 50) {
    header.classList.add("home_sticky");
  } else {
    header.classList.remove("home_sticky");
  } 
}