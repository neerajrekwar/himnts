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

 let addOn = document.getElementById("prizeSelect").value;
 let newPrice = document.getElementById("totalPrize");

 const tatal = addOn + newPrice;

 document.getElementById("totalPrice").textContent = total.toFixed(2);