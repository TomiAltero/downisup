const express = require('express');
const router = express.Router();
const psychologyTherapieController = require('../controllers/medical-data/psichologiesTherapies');
const tokenVerify = require('../middlewars/authentification');
const speechTherapies = require('../controllers/medical-data/speechTherapies');
const physiologyTherapies = require('../controllers/medical-data/physiologyTherapies');


router.get(
  '/:hijoId/psychologyTherapies',
  tokenVerify,
  psychologyTherapieController.getPsychologyTherapiesForChildren
);


router.post('/psychologyTherapies', psychologyTherapieController.addPsychologyTherapy);
router.post('/speechTherapies', speechTherapies.addSpeechTherapies);
router.post('/physiologicalTherapies', physiologyTherapies.addPhysiologyTherapie)


module.exports = router;

