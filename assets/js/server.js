const express = require('express');
const { google } = require('googleapis');
const credentials = require('./credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { to, subject, message } = req.body;
    try {
        const auth = await authorize();
        const rawMessage = createMessage(to, subject, message);
        const gmail = google.gmail({ version: 'v1', auth });
        const response = await gmail.users.messages.send({
            userId: 'me',
            resource: {
                raw: rawMessage,
            },
        });
        console.log(response.data);
        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Error sending email.' });
    }
});

function createMessage(to, subject, body) {
    const email_lines = [];
    email_lines.push(`To: ${to}`);
    email_lines.push('Content-type: text/html;charset=iso-8859-1');
    email_lines.push('MIME-Version: 1.0');
    email_lines.push(`Subject: ${subject}`);
    email_lines.push('');
    email_lines.push(body);
    const email = email_lines.join('\r\n').trim();
    const base64EncodedEmail = Buffer.from(email).toString('base64');
    return base64EncodedEmail;
}

async function authorize() {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]
    );

    const token = credentials.tokens;
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
