const buttonThree = document.querySelector('.button-three');

buttonThree.addEventListener('click', () => {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('active');
    const isOpened = buttonThree.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'true');
    } else {
        buttonThree.setAttribute('aria-expanded', 'false');
    }
})

  $(document).ready(function(){
    // Initialize each carousel
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });




