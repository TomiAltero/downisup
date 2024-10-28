const Usuario = require("../../../models/users/usuario");
const bcrypt = require("bcrypt");

class UserManagementController {
  async obtenerUsuarios(req, res) {
    const usuarios = await Usuario.findAll();
    try {
      res.json(usuarios);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Hubo un error al obtener usuarios" });
    }
  }

  async obtenerUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(usuario);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      res.status(500).json({ error: "Hubo un error al obtener el usuario" });
    }
  }

  async agregarUsuario(req, res) {
    try {
      const {
        username,
        email,
        dni,
        password,
        nombre,
        apellido,
        imagen,
        tipoUsuarioId,
      } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const nuevoUsuario = await Usuario.create({
        username,
        email,
        dni,
        password: hashedPassword,
        nombre,
        apellido,
        imagen,
        tipoUsuarioId: 1,
      });

      console.log("Usuario creado:", nuevoUsuario.toJSON());
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.error("Error al agregar usuario:", error);
      res.status(500).json({ error: "Hubo un error al agregar usuario" });
    }
  }

  async actualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const { username, email, password, nombre, apellido } = req.body;

      let usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      usuario.username = username;
      usuario.email = email;
      if (password) {
        usuario.password = await bcrypt.hash(password, 10);
      }
      usuario.nombre = nombre;
      usuario.apellido = apellido;

      await usuario.save();

      console.log("Usuario actualizado:", usuario.toJSON());
      res.json(usuario);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).json({ error: "Hubo un error al actualizar usuario" });
    }
  }

  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      console.log("Usuario eliminado:", usuario.toJSON());
      res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ error: "Hubo un error al eliminar usuario" });
    }
  }

  async verifyEmail(req, res) {
    const { email } = req.body;
    const user = await Usuario.findOne({
      where: { email },
    });
    if (user) {
      return res
        .status(400)
        .json({ error: "El mensaje se envió correctamente" });
    }
    return res.status(200).json({
      message:
        "La dirección de correo electrónico no pertenece a un usuario del sistema.",
    });
  }
}

module.exports = new UserManagementController();
