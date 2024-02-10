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
  var item1Price = parseFloat(document.getElementById("item1").value);
  var item2Price = parseFloat(document.getElementById("item2").value);
  var customItemPrice = parseFloat(document.getElementById("prizeSelect").value);

  // Calculate total price
  var totalPrice = item1Price + item2Price + customItemPrice;

  // Update the total price element
  document.getElementById("totalPrice").textContent = '₹' + totalPrice.toFixed(2);
}

// Attach the updateTotal function to the onchange event of the dropdown
document.getElementById("prizeSelect").addEventListener("change", updateTotal);
