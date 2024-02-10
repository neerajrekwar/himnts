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

 // Get the select element
 const prizeSelect = document.getElementById('prizeSelect');
    
 // Get the total prize span element
 const totalPrizeSpan = document.getElementById('totalPrize');

 // Add an event listener to the select element
 prizeSelect.addEventListener('change', updateTotalPrize);

 // Function to update the total prize based on the selected prize
 function updateTotalPrize() {
   // Get the selected prize value
   const selectedPrize = parseFloat(prizeSelect.value);

   // Update the total prize
   totalPrizeSpan.textContent = selectedPrize.toFixed(2);
 }
