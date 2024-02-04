const myNavee = document.querySelector(".button-three");

myNavee.addEventListener("click", () => {
  const menu = document.querySelector(".navbar");
  menu.classList.toggle("active");
  const isOpened = myNavee.getAttribute("aria-expanded");
  if (isOpened === "false") {
    myNavee.setAttribute("aria-expanded", "true");
  } else {
    myNavee.setAttribute("aria-expanded", "false");
  }
});

$(document).ready(function(){
  $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000 // Set the speed in milliseconds
  });
});