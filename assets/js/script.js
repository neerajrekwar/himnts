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
 function sendWhatsAppMessages() {
  
  const packages = [
    { name: 'Joyful', price: '&#8377;1399' },
    { name: 'Delight', price: '&#8377;2199' },
    { name: 'Extravaganza', price: '&#8377;3499' },
    // Add more packages as needed
  ];
  

    packages.forEach(package  =>  {
      const message = `Hello! I would like to book the following package:\n\nName: ${package.name}\nPrice: ${package.price}`;

      // Replace the following number with the desired WhatsApp number
      const phoneNumber = '+918882358053';

      const waMeLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp link in a new tab for each package
      window.open(waMeLink, '_blank');
    });
  }

// me.mindStet(life.change('none').value);
