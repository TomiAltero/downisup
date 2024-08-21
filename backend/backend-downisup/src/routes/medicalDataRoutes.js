const express = require('express');
const router = express.Router();
const PsychologicalTherapiesController = require('../controllers/medical-data/medicalDataController');

router.post('/psychologyTherapie', PsychologicalTherapiesController.addPsychologyTherapy);

module.exports = router;
