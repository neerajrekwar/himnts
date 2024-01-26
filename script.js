let buttonThree = document.querySelector('.button-three');

buttonThree.addEventListener('click', () => {
    const menu = document.querySelectore('.navbar');
    menu.classList.toggle('active');
    const isOpened = buttonThree.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'true');
    } else {
        buttonThree.setAttribute('aria-expanded', 'false');
    }
})

