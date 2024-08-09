const express = require("express");
const router = express.Router();
const childrenController = require("../controllers/hijosController");
const childrensManagmentController = require("../controllers/childrens/childrensManagmentController");
const childrenForUser = require("../controllers/childrens/childrensManagmentController.js");
const verificarToken = require("../middlewars/authentification");

router.get("/", verificarToken, childrenController.obtenerHijos);

router.get(
  "/:hijoId/frecuenciaCardiaca",
  verificarToken,
  childrenController.obtenerFrecuenciaCardiacas,
);

router.get(
  "/:hijoId/presionArterial",
  verificarToken,
  childrenController.obtenerPresionArterial,
);

router.get(
  "/:hijoId/temperatura",
  verificarToken,
  childrenController.obtenerTemperaturas,
);

router.get("/:hijoId/peso", verificarToken, childrenController.obtenerPesos);

router.get("/profiles", verificarToken, childrenForUser.getChildrenForUser);

router.post("/", verificarToken, childrensManagmentController.addChildren);
module.exports = router;
