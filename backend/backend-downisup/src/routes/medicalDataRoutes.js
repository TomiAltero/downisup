const express = require('express');
const router = express.Router();
const psychologyTherapieController = require('../controllers/medical-data/psichologiesTherapies');
const tokenVerify = require('../middlewars/authentification');

router.post('/psychologyTherapies', psychologyTherapieController.addPsychologyTherapy);


router.get(
  '/:hijoId/psychologyTherapies',
  tokenVerify,
  psychologyTherapieController.getPsychologyTherapiesForChildren
);

module.exports = router;

