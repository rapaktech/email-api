const express = require('express');

const { sendMail } = require('./utilities/emailSender');

const { eMessage } = require('./utilities/emailTemplate');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/', express.static(__dirname + '/views'));

app.listen(PORT, () => console.log("Server is running!"));

app.post('/', async (req, res) => {
    // Collect data from request
    const { email, subject, message } = req.body;

    // Send Mail
    try {
        if (!email || !subject || !message) {
            return res.status(400)
            .json({
                statusCode: 400,
                message: "Incomplete Data"
            });
        }

        await sendMail({
            email,
            subject,
            message: await eMessage(message)
        });

        res.status(201).json({ message: "Email Sent Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Email Not Sent" });
    }
});