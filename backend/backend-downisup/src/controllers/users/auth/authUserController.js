const Usuario = require("../../../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

class AuthUserController {
  async loginUsuario(req, res) {
    const { usernameOrEmail, password } = req.body;

    try {
      const usuario = await Usuario.findOne({
        where: {
          [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      } else if (!(await bcrypt.compare(password, usuario.password))) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
      }

      const token = jwt.sign({ id: usuario.id }, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });

      return res.json({
        message: "Inicio de sesión exitoso",
        token,
        usuario: {
          id: usuario.id,
          username: usuario.username,
          email: usuario.email,
        },
      });
    } catch (error) {
      console.error("Error en el login:", error);
      res.status(500).json({ error: "Hubo un error en el login" });
    }
  }
}

module.exports = new AuthUserController();
