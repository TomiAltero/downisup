const Usuario = require('../../models/users/usuario');
const PsychologicalTherapies = require('../../models/medical-data/psychologycalTherapies');
const Hijo = require('../../models/childrens/hijo');

class PsychologicalTherapiesController {
  async addPsychologyTherapy(req, res) {
    try {
      const {
        hijoId,
        idUsuario,
        fecha,
        descripcion,
        objetivos,
        observaciones,
        duracion,
      } = req.body;

      if (!hijoId || !idUsuario || !fecha || !descripcion || !objetivos || !observaciones || !duracion) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
      }

      const newTherapy = await PsychologicalTherapies.create({
        hijoId,
        idUsuario,
        fecha,
        descripcion,
        objetivos,
        observaciones,
        duracion,
      });

      console.log("Terapia psicológica creada:", newTherapy.toJSON());
      res.status(201).json(newTherapy);
    } catch (error) {
      console.error("Error al agregar terapia psicológica:", error);
      res.status(500).json({ error: "Hubo un error al agregar la terapia psicológica" });
    }
  }

  async getAllPsychologyTherapies(req, res) {
    try {
      const therapies = await PsychologicalTherapies.findAll();

      if (therapies.length === 0) {
        return res.status(404).json({ message: "No se encontraron terapias psicológicas" });
      }

      res.status(200).json(therapies);
    } catch (error) {
      console.error("Error al obtener las terapias psicológicas:", error);
      res.status(500).json({ error: "Hubo un error al obtener las terapias psicológicas" });
    }
  }

  async getPsychologyTherapiesForChildren(req, res) {
    try {
      const { hijoId } = req.params;

      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: PsychologicalTherapies,
            as: "PsychologycalTherapies",
          },
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const hijo = usuario.Hijos[0];

      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      res.json({
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
        },
        hijo: {
          id: hijo.id,
          nombre: hijo.nombre,
          apellido: hijo.apellido,
          edad: hijo.edad,
          dni: hijo.dni
        },
        psychologicalTherapies: hijo.PsychologycalTherapies,
      });
    } catch (error) {
      console.error("Error al obtener las terapias psicológicas:", error);
      res.status(500).json({ error: "Hubo un error al obtener las terapias psicológicas" });
    }
  }
}

module.exports = new PsychologicalTherapiesController();

