const express = require("express");
const router = express.Router();
const turnosController = require("../controllers/turnosController.js");

// Ruta para obtener todos los turnos
router.get("/", turnosController.getTurnos);

// Ruta para eliminar un turno por nombre de paciente y horario
router.delete("/:nombrePaciente/:horario", turnosController.deleteTurno);


module.exports = router;
