const SpeechTherapies = require('../../models/medical-data/speechTherapies');

class SpeechTherapiesController {
  async addSpeechTherapies(req, res) {
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

      const newSpeechTherapy = await SpeechTherapies.create({
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
}

module.exports = new SpeechTherapiesController();


