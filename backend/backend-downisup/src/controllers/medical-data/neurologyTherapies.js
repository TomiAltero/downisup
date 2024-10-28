const NeurologicalTherapies = require("../../models/medical-data/neurologicalTherapies");
const Hijo = require("../../models/childrens/hijo");
const Usuario = require("../../models/users/usuario");

class NeurologicalTherapiesController {
  async addNeurologyTherapie(req, res) {
    try {
      const { date, description, objectives, observations, idUsuario, hijoId } =
        req.body;

      if (!date || !idUsuario) {
        return res
          .status(400)
          .json({ message: "Date and idUsuario are required" });
      }

      const newTherapie = await NeurologicalTherapies.create({
        hijoId,
        idUsuario,
        date,
        description,
        objectives,
        observations,
        idUsuario,
        hijoId,
      });

      return res
        .status(201)
        .json({
          message: "Neurological therapy added successfully",
          data: newTherapie,
        });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  }
  async getNeurologicalForChildren(req, res) {
    try {
      const { hijoId } = req.params;

      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: NeurologicalTherapies,
            as: "NeurologicalTherapies",
          },
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const hijo = usuario.Hijos[0];

      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      res.json({
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
        },
        hijo: {
          id: hijo.id,
          nombre: hijo.nombre,
          apellido: hijo.apellido,
          edad: hijo.edad,
          dni: hijo.dni,
        },
        neurologicalTherapies: hijo.NeurologicalTherapies,
      });
    } catch (error) {
      console.error("Error al obtener las terapias psicológicas:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las terapias psicológicas" });
    }
  }
}

module.exports = new NeurologicalTherapiesController();
