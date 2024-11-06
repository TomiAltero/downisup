const express = require("express");
const router = express.Router();
const especialistasController = require("../controllers/especialistasController.js");

// Ruta para obtener todos los especialistas
router.get("/", especialistasController.getEspecialistas);

// Ruta para agregar un nuevo especialista
router.post("/", especialistasController.addEspecialista);

// Ruta para borrar un especialista por nombre
router.delete("/:nombre", especialistasController.deleteEspecialista);

module.exports = router;
