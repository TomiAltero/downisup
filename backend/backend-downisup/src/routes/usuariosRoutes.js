const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/users/usuariosController");
const usuarioManagment = require("../controllers/users/userManagment/userManagementController");
const usuarioAuth = require("../controllers/users/auth/authUserController.js");
const verificarToken = require("../middlewars/authentification");
const { validationResult } = require("express-validator");
const validationDataUser =
  require("../middlewars/validations").validateUserRegistration;

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
router.get("/perfil", verificarToken, usuarioController.obtenerPerfilUsuario);

router.get("/", verificarToken, usuarioController.obtenerUsuarios);
router.get("/:id", verificarToken, usuarioController.obtenerUsuarioPorId);

router.put("/:id", verificarToken, usuarioController.actualizarUsuario);
router.delete("/:id", verificarToken, usuarioController.eliminarUsuario);

module.exports = router;
