const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-reset-code", async (req, res) => {
  const { email } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "facubisio433@gmail.com", // Replace with your Gmail
      pass: "clcc eskt sevb gysl", // Replace with your Gmail password or app password
    },
  });

  const mailOptions = {
    from: "facubisio433@gmail.com",
    to: email, // The email where you want to receive the form data
    subject: `Reincio de contraseña para la cuaenta ${email}`,
    text: `Se ha solicitado un reinicio de contraseña para la cuenta ${email}. \nSi no has sido tú, ignora este mensaje. Si has sido tú, ingresa el siguiente código en la aplicación: 123456`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send(" Mensaje enviado con exito.");
  } catch (error) {
    res.status(500).send(" Error sending message");
  }
});

module.exports = router;
