// JavaScript 
function displaySelectedPackage() {
    var selectedPackage = document.getElementById("package-select").value;
    document.getElementById("selected-package").innerText = selectedPackage;
}

$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the speed as needed
        dots: true, // Show navigation dots
        arrows: true // Show navigation arrows
        // Add more configuration options based on your requirements
    });
});
