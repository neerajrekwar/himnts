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

 let addOnNeon = document.getElementById("prizeSelect").value;
 let newPrice = document.getElementById("totalPrize");

 const totalPrice = addOnNeon + 1399;

 document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);