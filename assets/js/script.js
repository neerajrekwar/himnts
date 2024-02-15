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
})

document.addEventListener('DOMContentLoaded', () => {
  const sendButtons = document.querySelectorAll('.send-btn');

  sendButtons.forEach(button => {
    button.addEventListener('click', () => {
      const packageName = button.getAttribute('data-package-name');
      const packagePrice = button.getAttribute('data-package-price');

      const phoneNumber = '+918882358053';
      const waMessage = `Hello! I am interested in the following package:\n\nName: ${packageName}\nPrice: ${packagePrice}`;
      const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;

      // Open WhatsApp chat link
      window.open(waLink, '_blank');
    });
  });
});
// me.mindStet(life.change('none').value);
