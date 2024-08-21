const PsychologicalTherapies = require("../../models/medical-data/psychologycalTherapies");

class PsychologicalTherapiesController {
  async addPsychologyTherapy(req, res) {
    try {
      const {
        idHijo,
        idUsuario,
        fecha,
        descripcion,
        objetivos,
        observaciones,
        duracion,
      } = req.body;

      if (!idHijo || !idUsuario || !fecha) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
      }

      const nuevaTerapia = await PsychologicalTherapies.create({
        idHijo,
        idUsuario,
        fecha,
        descripcion,
        objetivos,
        observaciones,
        duracion,
      });

      console.log("Terapia psicológica creada:", nuevaTerapia.toJSON());
      res.status(201).json(nuevaTerapia);
    } catch (error) {
      console.error("Error al agregar terapia psicológica:", error);
      res.status(500).json({ error: "Hubo un error al agregar la terapia psicológica" });
    }
  }
}

module.exports = new PsychologicalTherapiesController();
