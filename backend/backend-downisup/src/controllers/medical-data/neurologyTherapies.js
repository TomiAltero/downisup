const NeurologicalTherapies = require('../../models/medical-data/neurologicalTherapies');

class NeurologicalTherapiesController {
  async addNeurologyTherapie(req, res) {
    try {
      const { date, description, objectives, observations, idUsuario, idHijo } = req.body;

      if (!date || !idUsuario) {
        return res.status(400).json({ message: "Date and idUsuario are required" });
      }

      const newTherapie = await NeurologicalTherapies.create({
        idHijo,
        idUsuario,
        date,
        description,
        objectives,
        observations,
        idUsuario,
        idHijo,
      });

      return res.status(201).json({ message: "Neurological therapy added successfully", data: newTherapie });
    } catch (error) {
      return res.status(500).json({ message: "An error occurred", error: error.message });
    }
  }
}

module.exports = new NeurologicalTherapiesController();

