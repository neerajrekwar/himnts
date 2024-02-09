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

const CLIENT_ID = '945269722687-lcb5mqbn1hdf8dhhdnj6a1aufrcfc5io.apps.googleusercontent.com';
const API_KEY = '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';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
const SCOPES = 'https://www.googleapis.com/auth/gmail.send';

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
    }).then(function () {
        // Handle the initialization
    }).catch(function (error) {
        console.log('Error initializing GAPI: ', error);
    });
}

function sendEmail() {
    const senderEmail = document.getElementById('senderEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
            'raw': makeEmail(senderEmail, 'dev.neerajrekwar@gmail.com', subject, message),
        }
    }).then(function (response) {
        console.log('Email sent successfully: ', response);
        document.getElementById('statusMessage').innerHTML = 'Email sent successfully!';
        document.getElementById('statusMessage').style.color = '#4caf50';
    }).catch(function (error) {
        console.error('Error sending email: ', error);
        document.getElementById('statusMessage').innerHTML = 'Error sending email.';
        document.getElementById('statusMessage').style.color = '#f44336';
    });
}

function makeEmail(sender, to, subject, body) {
    const headers = [
        'Content-Type: text/plain; charset="UTF-8"',
        'MIME-Version: 1.0',
        `To: ${to}`,
        `Subject: ${subject}`,
        `From: ${sender}`,
    ];

    const message = headers.join('\r\n') + '\r\n\r\n' + body;
    const encodedMessage = btoa(message);

    return encodedMessage;
}

gapi.load('client:auth2', initClient);
