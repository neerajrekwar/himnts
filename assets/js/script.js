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


function sendWhatsAppMessage() {
  const packageName = document.getElementById('packageName').innerText;
  const packageDetails = document.getElementById('packageDetails').innerText;
  const packagePrice = document.getElementById('packagePrice').innerText;

  // Replace the following number with the desired WhatsApp number
  const phoneNumber = '+918882358053';

  const message = `Hello! I am interested in the following package:\n\nName: ${packageName}\nPrice: ${packagePrice}`;

  const waMeLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp link in a new tab
  window.open(waMeLink, '_blank');
}

// me.mindStet(life.change('none').value);


