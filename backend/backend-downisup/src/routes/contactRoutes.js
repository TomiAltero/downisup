const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { name, surname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'facubisio433@gmail.com', // Replace with your Gmail
      pass: 'Fb27122005',  // Replace with your Gmail password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'facubisio433@gmail.com', // The email where you want to receive the form data
    subject: `New Contact Form Submission from ${name} ${surname}`,
    text: `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Error sending message');
  }
});

module.exports = router;
