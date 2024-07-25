const Usuario = require("../models/usuario");
const UsuarioXHijo = require("../models/usuarioXHijo");
const Hijo = require("../models/hijo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const FrecuenciaCardiaca = require("../models/frecuenciaCardiaca");
const PresionArterial = require("../models/presionArterial");
const Temperatura = require("../models/temperatura");
const Peso = require("../models/peso");
const upload = require("../config/upload");
const { Op } = require("sequelize");

/**
 * Controlador para gestionar las operaciones relacionadas con los usuarios.
 */
class UsuarioController {
  /**
   * Obtiene todos los usuarios.
   *
   * @param {Object} req - El objeto de solicitud HTTP.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con una lista de usuarios o un mensaje de error en caso de fallo.
   */
  async obtenerUsuarios(req, res) {
    const usuarios = await Usuario.findAll();
    try {
      res.json(usuarios);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Hubo un error al obtener usuarios" });
    }
  }

  /**
   * Obtiene un usuario por su ID.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener el parámetro `id` en `req.params`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con los detalles del usuario o un mensaje de error si no se encuentra.
   */
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

  /**
   * Agrega un nuevo usuario.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener los datos del nuevo usuario en `req.body`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con el usuario creado o un mensaje de error en caso de fallo.
   */
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

  /**
   * Actualiza los datos de un usuario existente.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener el `id` del usuario en `req.params` y los datos actualizados en `req.body`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con el usuario actualizado o un mensaje de error si el usuario no se encuentra.
   */
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

  /**
   * Elimina un usuario por su ID.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener el `id` del usuario en `req.params`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con un mensaje de éxito o un mensaje de error si el usuario no se encuentra.
   */
  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      await usuario.destroy();
      console.log("Usuario eliminado:", usuario.toJSON());
      res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ error: "Hubo un error al eliminar usuario" });
    }
  }

  /**
   * Permite a un usuario iniciar sesión.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener `usernameOrEmail` y `password` en `req.body`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con un mensaje de éxito, un token JWT y los detalles del usuario, o con un mensaje de error si la autenticación falla.
   */
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
        expiresIn: "3h",
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

  /**
   * Obtiene el perfil del usuario, incluyendo la lista de hijos.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe tener el `userId` en `req.userId`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con los detalles del usuario y sus hijos o un mensaje de error si el usuario no se encuentra.
   */
  async obtenerPerfilUsuario(req, res) {
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

  /**
   * Obtiene la lista de hijos asociados al usuario.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe tener el `userId` en `req.userId`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con la lista de hijos o un mensaje de error si el usuario no se encuentra.
   */
  async obtenerHijos(req, res) {
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

      res.json(hijos);
    } catch (error) {
      console.error("Error al obtener los hijos del usuario:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener los hijos del usuario" });
    }
  }

  /**
   * Obtiene las frecuencias cardíacas de un hijo específico.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener el `hijoId` en `req.params`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con la lista de frecuencias cardíacas o un mensaje de error si el hijo no se encuentra.
   */
  async obtenerFrecuenciaCardiacas(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: FrecuenciaCardiaca,
            as: "frecuenciasCardiacas",
          },
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const hijo = usuario.Hijos[0];

      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const frecuenciaCardiacas = await hijo.frecuenciasCardiacas;

      res.json(frecuenciaCardiacas);
    } catch (error) {
      console.error("Error al obtener las frecuencias cardiacas:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las frecuencias cardiacas" });
    }
  }

  /**
   * Obtiene las presiones arteriales de un hijo específico.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener el `hijoId` en `req.params`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con la lista de presiones arteriales o un mensaje de error si el hijo no se encuentra.
   */
  async obtenerPresionArterial(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: PresionArterial,
            as: "presionArterial",
          },
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const hijo = usuario.Hijos[0];

      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const presionesArteriales = await hijo.getPresionArterial();

      res.json(presionesArteriales);
    } catch (error) {
      console.error("Error al obtener las Presiones Arteriales:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las presiones arteriales" });
    }
  }

  /**
   * Obtiene las temperaturas de un hijo específico.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener el `hijoId` en `req.params`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con la lista de temperaturas o un mensaje de error si el hijo no se encuentra.
   */
  async obtenerTemperaturas(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: Temperatura,
            as: "Temperatura",
          },
        },
      });
      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const hijo = usuario.Hijos[0];
      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const temperaturas = await hijo.getTemperatura();
      res.json(temperaturas);
    } catch (error) {
      console.error("Error al obtener las temperaturas:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las temperaturas" });
    }
  }

  /**
   * Obtiene los pesos de un hijo específico.
   *
   * @param {Object} req - El objeto de solicitud HTTP, debe contener el `hijoId` en `req.params`.
   * @param {Object} res - El objeto de respuesta HTTP.
   * @returns {void} Responde con la lista de pesos o un mensaje de error si el hijo no se encuentra.
   */
  async obtenerPesos(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: Peso,
            as: "Peso",
          },
        },
      });
      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const hijo = usuario.Hijos[0];
      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const pesos = await hijo.getPeso();
      res.json(pesos);
    } catch (error) {
      console.error("Error al obtener los pesos:", error);
      res.status(500).json({ error: "Hubo un error al obtener los pesos" });
    }
  }
}

module.exports = new UsuarioController();
