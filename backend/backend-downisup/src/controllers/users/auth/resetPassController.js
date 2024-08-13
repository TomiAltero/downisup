const nodemailer = require("nodemailer");
const crypto = require("crypto");
const Usuario = require("../../../models/usuario");
const { validationResult } = require("express-validator");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.resetPassword = async (req, res, next) => {
  const { email } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await Usuario.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: "Recuperación de Contraseña",
      text: `Has solicitado una recuperación de contraseña. Por favor, usa el siguiente enlace para restablecer tu contraseña: \n\n
      ${req.protocol}://${req.get("host")}/reset-password/${token}\n\n
      Si no has solicitado esta recuperación, por favor ignora este correo.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: "Correo de recuperación enviado" });
  } catch (error) {
    next(error);
  }
};
