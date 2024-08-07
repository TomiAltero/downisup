const Usuario = require("../models/usuario");
const Hijo = require("../models/hijo");
const UsuarioXHijo = require("../models/usuarioXHijo");
const FrecuenciaCardiaca = require("../models/frecuenciaCardiaca");
const PresionArterial = require("../models/presionArterial");
const Temperatura = require("../models/temperatura");
const Peso = require("../models/peso");

class HijosController {
  async obtenerHijos(req, res) {
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

  async obtenerHijosPorUsuario(req, res) {
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

module.exports = new HijosController();
