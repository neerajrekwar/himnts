$(function () {
  $("#header").load("/assets/html/header.html");
  $("#footer").load("/assets/html/footer.html");
});
// // Your HTML content for the page

//     // JavaScript code for dynamically creating and appending a footer

//     // Function to create the footer content
//     function createFooter() {
//         const footer = document.createElement('footer');
//         footer.id = 'page-footer';

//         // Add your footer content here, for example:
//         const footerContent = `
//             <p>&copy; 2024 Your Website Name</p>
//             <!-- Additional footer content goes here -->
//         `;

//         footer.innerHTML = footerContent;

//         // Append the footer to the body
//         document.body.appendChild(footer);
//     }

//     // Function to apply createFooter to all pages
//     function applyFooterToAllPages() {
//         const pages = document.querySelectorAll('.page'); // Assuming each page has a common class 'page'

//         pages.forEach(function(page) {
//             const clonedFooter = createFooter(); // Create a new footer for each page
//             page.appendChild(clonedFooter);
//         });
//     }

//     // Call the function when the page is fully loaded
//     document.addEventListener('DOMContentLoaded', applyFooterToAllPages);


