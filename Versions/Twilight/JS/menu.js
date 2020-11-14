/* Table of Contents
********************

1. Create Effect for Hamburger Menu Lines
2. Transform Menu after Click

*/


// Create Effect for Hamburger Menu Lines
const menuIcon = document.querySelector (".home_hamburger");
const home = document.querySelector (".home");
menuIcon.addEventListener("click", () => {
    home.classList.toggle("home_change");
});


// Transform Menu after Click 
$(document).ready(function() {
    $(".home_click").on("click", function() {
        $(".home").removeClass("home_change");
    });
}); 