const PhysiologyTherapies = require('../../models/medical-data/physiologycalTherapies');
const Usuario = require('../../models/users/usuario');
const Hijo = require('../../models/childrens/hijo');

class PhysiologyTherapiesController {
  async addPhysiologyTherapie(req, res) {
    try {
      const { 
        date, 
        description, 
        objectives, 
        observations, 
        idUsuario, 
        hijoId 
      } = req.body;

      if (!date || !idUsuario || !hijoId) {
        return res.status(400).json({ message: 'Date, idUsuario, and idHijo are required.' });
      }

      const newSpeechTherapy = await PhysiologyTherapies.create({
        hijoId,
        idUsuario,
        date,
        description,
        objectives,
        observations,
        idUsuario,
        hijoId,
      });

      return res.status(201).json({
        message: 'Speech therapy session created successfully.',
        speechTherapy: newSpeechTherapy,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to create speech therapy session.',
        error: error.message,
      });
    }
  }
  
  async getPhysiologyTherapiesForChildren(req, res) {
    try {
      const { hijoId } = req.params;

      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: PhysiologyTherapies,
            as: "PhysiologicalTherapies",
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
        physiologicalTherapies: hijo.PhysiologicalTherapies,
      });
    } catch (error) {
      console.error("Error al obtener las terapias psicológicas:", error);
      res.status(500).json({ error: "Hubo un error al obtener las terapias psicológicas" });
    }
  }




}

module.exports = new PhysiologyTherapiesController();


