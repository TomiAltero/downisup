const express = require("express");
const router = express.Router();
const hijoController = require("../controllers/hijosController");
const verificarToken = require("../middlewars/authentification");

router.get("/", verificarToken, hijoController.obtenerHijos);

router.get(
  "/:hijoId/frecuenciaCardiaca",
  verificarToken,
  hijoController.obtenerFrecuenciaCardiacas,
);

router.get(
  "/:hijoId/presionArterial",
  verificarToken,
  hijoController.obtenerPresionArterial,
);

router.get(
  "/:hijoId/temperatura",
  verificarToken,
  hijoController.obtenerTemperaturas,
);

router.get("/:hijoId/peso", verificarToken, hijoController.obtenerPesos);

module.exports = router;
