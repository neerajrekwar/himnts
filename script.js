const buttonThree = document.querySelector('.button-three');

buttonThree.addEventListener('click', () => {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('active');
    const isOpened = buttonThree.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'true');
    } else {
        buttonThree.setAttribute('aria-expanded', 'false');
    }
})

// footer.js

// Function to create the footer content
function createFooter() {
    const footer = document.createElement('footer');
    footer.id = 'page-footer';

    // Add your footer content here, for example:
    const footerContent = `
        <p>&copy; 2024 Your Website Name</p>
        <!-- Additional footer content goes here -->
    `;

    footer.innerHTML = footerContent;

    return footer;
}

// Function to append the footer to the current page
function appendFooter() {
    const body = document.body;
    const footer = createFooter();
    body.appendChild(footer);
}

// Call the function when the page is fully loaded
document.addEventListener('DOMContentLoaded', appendFooter);

