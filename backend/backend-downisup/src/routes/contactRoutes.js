const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, surname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "facubisio433@gmail.com", // Replace with your Gmail
      pass: "clcc eskt sevb gysl", // Replace with your Gmail password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: "facubisio433@gmail.com", // The email where you want to receive the form data
    subject: `Nueva consulta DownIsUp - ${name} ${surname}`,
    text: `${name} quiere contactarnos, estos son sus datos:\n Nombre: ${name}\nApellido: ${surname}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send(" Mensaje enviado con exito.");
  } catch (error) {
    res.status(500).send(" Error sending message");
  }
});

module.exports = router;
