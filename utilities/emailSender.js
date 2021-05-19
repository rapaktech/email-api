const nodemailer = require('nodemailer');

exports.sendMail = async (option) => {
    // Create a transporter object
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    // Data
    const mailOptions = {
        from: `${process.env.YOUR_NAME} <${process.env.YOUR_EMAIL}>`,
        to: option.email,
        subject: `${option.subject}`,
        html: option.message
    }

    // Send mail
    await transporter.sendMail(mailOptions);
}