const fs = require("fs");
const path = require("path");

const especialistasFilePath = path.resolve(__dirname, "../../data/especialistas.json");

// Leer la lista de especialistas desde el archivo JSON
const getEspecialistas = (req, res) => {
  try {
    const data = fs.readFileSync(especialistasFilePath, "utf8");
    const especialistas = JSON.parse(data);
    res.json({ especialistas });
  } catch (error) {
    console.error("Error al leer el archivo de especialistas:", error);
    res.status(500).json({ error: "Hubo un error al obtener los especialistas" });
  }
};

// Agregar un nuevo especialista al archivo JSON
const addEspecialista = (req, res) => {
  try {
    const nuevoEspecialista = req.body;
    const data = fs.readFileSync(especialistasFilePath, "utf8");
    const especialistas = JSON.parse(data);

    especialistas.push(nuevoEspecialista);
    fs.writeFileSync(especialistasFilePath, JSON.stringify(especialistas, null, 2));

    res.status(201).json({ message: "Especialista agregado", especialista: nuevoEspecialista });
  } catch (error) {
    console.error("Error al agregar un especialista:", error);
    res.status(500).json({ error: "Hubo un error al agregar el especialista" });
  }
};

// Borrar un especialista por su nombre
const deleteEspecialista = (req, res) => {
  try {
    const { nombre } = req.params;
    const data = fs.readFileSync(especialistasFilePath, "utf8");
    const especialistas = JSON.parse(data);

    const especialistasActualizados = especialistas.filter(
      (especialista) => especialista.nombre !== nombre
    );

    fs.writeFileSync(especialistasFilePath, JSON.stringify(especialistasActualizados, null, 2));

    res.status(200).json({ message: "Especialista borrado" });
  } catch (error) {
    console.error("Error al borrar un especialista:", error);
    res.status(500).json({ error: "Hubo un error al borrar el especialista" });
  }
};

module.exports = {
  getEspecialistas,
  addEspecialista,
  deleteEspecialista,
};
