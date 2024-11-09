const fs = require("fs");
const path = require("path");

const turnosFilePath = path.resolve(__dirname, "../data/turnos.json");

// Obtener todos los turnos desde el archivo JSON
const getTurnos = (req, res) => {
  try {
    const data = fs.readFileSync(turnosFilePath, "utf8");
    const turnos = JSON.parse(data);
    res.json({ turnos });
  } catch (error) {
    console.error("Error al leer el archivo de turnos:", error);
    res.status(500).json({ error: "Hubo un error al obtener los turnos" });
  }
};

// Eliminar un turno por nombrePaciente y horario
const deleteTurno = (req, res) => {
  try {
    const { nombrePaciente, horario } = req.params;
    const data = fs.readFileSync(turnosFilePath, "utf8");
    const turnos = JSON.parse(data);

    const turnosActualizados = turnos.filter((turno) =>
      !(turno.nombrePaciente === nombrePaciente && turno.horario === horario)
    );

    fs.writeFileSync(turnosFilePath, JSON.stringify(turnosActualizados, null, 2));
    res.status(200).json({ message: "Turno borrado exitosamente" });
  } catch (error) {
    console.error("Error al borrar el turno:", error);
    res.status(500).json({ error: "Hubo un error al borrar el turno" });
  }
};

module.exports = {
  getTurnos,
  deleteTurno,
};
