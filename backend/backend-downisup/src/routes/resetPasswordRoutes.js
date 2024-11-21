const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-reset-code", async (req, res) => {
  const { email, reset_code } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "downisupapp@gmail.com", // Replace with your Gmail
      pass: "down1234", // Replace with your Gmail password or app password
    },
  });

  const mailOptions = {
    from: "downisupapp@gmail.com",
    to: email, // The email where you want to receive the form data
    subject: `Reinicio de contraseña para la cuenta ${email}`,
    html: `
      <div class="netflix-reset-code">
        <div class="netflix-logo">
          <img src="netflix-logo.png" alt="Netflix Logo">
        </div>
        <div class="reset-code-container">
          <h2>${reset_code}</h2>
          <p>Este es el código para el cambio de contraseña</p>
          <p>Estas recibiendo este código porque vos (o alguien más) ha solicitado cambio de contraseña para la cuenta ${email}</p>
          <p>Si no fuiste vos, porfavor ignora este email y tu contraseña permanecerá si cambios</p>
        </div>
      </div>
      <style>
        .netflix-reset-code {
          font-family: Arial, sans-serif;
          background-color: #303487;
          padding: 20px;
          border-radius: 5px;
          max-width: 400px;
          margin: 0 auto;
        }

        .netflix-logo {
          text-align: center;
          margin-bottom: 20px;
        }

        .netflix-logo img {
          max-width: 150px;
        }

        .reset-code-container {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .reset-code-container h2 {
          font-size: 32px;
          color: #e50914;
          margin-bottom: 10px;
        }

        .reset-code-container p {
          font-size: 14px;
          color: #333;
          margin-bottom: 10px;
        }
      </style>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send(" Mensaje enviado con exito.");
  } catch (error) {
    res.status(500).send(" Error sending message");
  }
});

module.exports = router;
