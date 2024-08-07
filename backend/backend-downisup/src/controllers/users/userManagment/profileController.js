const Usuario = require("../../../models/usuario");

class ProfileController {
  async getProfileUser(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json({
        usuario: usuario.toJSON(),
      });
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener el perfil del usuario" });
    }
  }
}

module.exports = new ProfileController();
