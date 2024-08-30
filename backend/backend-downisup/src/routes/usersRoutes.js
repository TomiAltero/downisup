const express = require("express");
const router = express.Router();
const usuarioManagment = require("../controllers/users/userManagment/userManagementController.js");
const usuarioAuth = require("../controllers/users/auth/authUserController.js");
const userProfile = require("../controllers/users/userManagment/profileController.js");
const verificarToken = require("../middlewars/authentification.js");
const { validationResult } = require("express-validator");
const validationDataUser =
  require("../middlewars/validations.js").validateUserRegistration;

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
router.get("/perfil", verificarToken, userProfile.getProfileUser);

module.exports = router;
