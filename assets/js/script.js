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

// Initialize Email.js with your user ID
emailjs.init("service_mv0bgzv");

function sendEmail() {
    const senderEmail = document.getElementById('senderEmail').value;
    const recipientEmail = document.getElementById('recipientEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send email using Email.js
    emailjs.send("gmail", "template_your_email_template_id", {
        from_email: senderEmail,
        to_email: recipientEmail,
        subject: subject,
        message: message,
    }).then(
        function (response) {
            console.log("Email sent successfully:", response);
            document.getElementById('statusMessage').innerHTML = 'Email sent successfully!';
            document.getElementById('statusMessage').style.color = '#4caf50';
        },
        function (error) {
            console.error("Error sending email:", error);
            document.getElementById('statusMessage').innerHTML = 'Error sending email.';
            document.getElementById('statusMessage').style.color = '#f44336';
        }
    );
}
