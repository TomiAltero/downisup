const express = require("express");
const router = express.Router();
const usuarioManagment = require("../controllers/users/userManagment/userManagementController.js");
const usuarioAuth = require("../controllers/users/auth/authUserController.js");
const userProfile = require("../controllers/users/userManagment/profileController.js");
const verificarToken = require("../middlewars/authentification.js");
const { validationResult } = require("express-validator");
const validationDataUser =
  require("../middlewars/validations.js").validateUserRegistration;
const userSpeciality = require("../controllers/users/userManagment/specilistsController.js");

router.post("/", validationDataUser, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    await usuarioManagment.agregarUsuario(req, res);
  } catch (error) {
    next(error);
  }
});

router.post("/login", usuarioAuth.loginUsuario);
router.post("/logInUserAfterReset", usuarioAuth.logInUserAfterReset);

router.get("/perfil", verificarToken, userProfile.getProfileUser);

router.get("/speciality", verificarToken, userSpeciality.getSpecialityForUser);

router.post("/verifyEmail", usuarioManagment.verifyEmail);

module.exports = router;
