const PsychologicalTherapies = require("../../models/medical-data/psychologycalTherapies");
const SpeechTherapies = require("../../models/medical-data/speechTherapies");

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

      if (!idHijo || !idUsuario || !fecha) {
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

  async getSpeechTherapy(req, res) {
    try {
      const speechTherapy = await SpeechTherapies.findAll();

      if (speechTherapy.length === 0) {
        return res.status(404).json({ message: "No se encontraron terapias fonoaudiologicas" });
      }

      res.status(200).json(speechTherapy);
    } catch (error) {
      console.error("Error al obtener las terapias fonoaudiologicas:", error);
      res.status(500).json({ error: "Hubo un error al obtener las terapias fonoaudiologicas" });
    } 
  }

  async addSpeechTherapy(req, res) {
    try {
      const {
        idHijo,
        idUsuario,
        date,
        description,
        objetives,
        observations,
      } = req.body;

      if (!idHijo || !idUsuario || !date) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
      }

      const newTherapy = await SpeechTherapies.create({
        idHijo,
        idUsuario,
        date,
        description,
        objetives,
        observations,
      });

      console.log("Terapia fonoaudiológica creada:", newTherapy.toJSON());
      res.status(201).json(newTherapy);
    } catch (error) {
      console.error("Error al agregar terapia fonoaudiológica:", error);
      res.status(500).json({ error: "Hubo un error al agregar la terapia fonoaudiológica" });
    }
  }
}

module.exports = new PsychologicalTherapiesController();

    