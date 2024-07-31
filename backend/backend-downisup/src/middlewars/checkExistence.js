const Usuario = require("../models/usuario");

const checkExistence = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    const existingUserByUsername = await Usuario.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({
        errors: [{ msg: "Ya existe una cuenta con ese nombre de usuario" }],
      });
    }

    const existingUserByEmail = await Usuario.findOne({ email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Ya existe una cuenta con ese email" }] });
    }

    next();
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Error del servidor" }] });
  }
};

module.exports = checkExistence;
