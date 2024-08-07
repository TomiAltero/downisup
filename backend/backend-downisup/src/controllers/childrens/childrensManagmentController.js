const Usuario = require("../../models/usuario");
const Hijo = require("../../models/hijo");
const UsuarioXHijo = require("../../models/usuarioXHijo");

class ChildrensManagmentController {
  async getChildren(req, res) {
    try {
      const hijos = await Hijo.findAll();

      if (hijos.length === 0) {
        return res.status(404).json({ error: "No se encontraron hijos" });
      }

      res.json(hijos.map((hijo) => hijo.toJSON()));
    } catch (error) {
      console.error("Error al obtener todos los hijos:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener todos los hijos" });
    }
  }

  async getChildrenForUser(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const hijos = usuario.Hijos.map((hijo) => hijo.toJSON());

      res.json({
        usuario: usuario.toJSON(),
        hijos: hijos,
      });
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener el perfil del usuario" });
    }
  }
}

module.exports = new ChildrensManagmentController();
