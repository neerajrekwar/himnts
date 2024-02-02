const myNavee = document.querySelector(".button-three");

if (myNavee) {
  myNavee.addEventListener("click", () => {
    const menu = document.querySelector(".navbar");

    if (menu) {
      menu.classList.toggle("active");

      const isOpened = myNavee.getAttribute("aria-expanded");

      if (isOpened === "false") {
        myNavee.setAttribute("aria-expanded", "true");
      } else {
        myNavee.setAttribute("aria-expanded", "false");
      }
    }
  });
}
