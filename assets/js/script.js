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

function updateTotal() {
  // Get selected values
  var customItemPrice = parseFloat(document.getElementById("prizeSelect").value);

  // Update the total price element
  var totalPrice = 1399 + customItemPrice;
  document.getElementById("totalPrice").textContent = '₹' + totalPrice.toFixed(2);
}

me.mindStet(life.change('none').value);