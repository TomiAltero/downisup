const express = require('express');
const router = express.Router();
const psychologyTherapieController = require('../controllers/medical-data/psichologiesTherapies');
const tokenVerify = require('../middlewars/authentification');
const speechTherapies = require('../controllers/medical-data/speechTherapies');
const physiologyTherapies = require('../controllers/medical-data/physiologyTherapies');
const neurologyTherapies = require('../controllers/medical-data/neurologyTherapies');
const medicalDataGeneral = require('../controllers/medical-data/dataMedicalController')


router.get('/specialities',tokenVerify, medicalDataGeneral.getAllSpecialities);

router.get(
  '/:hijoId/psychologyTherapies',
  tokenVerify,
  psychologyTherapieController.getPsychologyTherapiesForChildren
);

router.get(
  '/:hijoId/speechTherapies',
  tokenVerify,
  speechTherapies.getSpeechTherapiesForChildren
);

router.get(
  '/:hijoId/physiologyTherapies',
  tokenVerify,
  physiologyTherapies.getPhysiologyTherapiesForChildren
);

router.get(
  '/:hijoId/neurologicalTherapies',
  tokenVerify,
  neurologyTherapies.getNeurologicalForChildren
);




router.post('/psychologyTherapies', psychologyTherapieController.addPsychologyTherapy);
router.post('/speechTherapies', speechTherapies.addSpeechTherapies);
router.post('/physiologicalTherapies', physiologyTherapies.addPhysiologyTherapie);
router.post('/neurologicalTherapies', neurologyTherapies.addNeurologyTherapie);


module.exports = router;

