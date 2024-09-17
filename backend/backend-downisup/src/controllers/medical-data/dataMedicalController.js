const Specialities = require('../../models/specialists/specialities');

class MedicalDataController {
  async getAllSpecialities(req,res) {
    try {
      const specialities = await Specialities.findAll();
      res.status(200).json(specialities);
    }catch(error) {
      res.status(500).json({ error: 'Failed to retrieve specialities' });
    }
}
}

module.exports = new MedicalDataController();
