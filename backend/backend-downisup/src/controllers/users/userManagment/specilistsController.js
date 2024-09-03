const Usuario = require('../../../models/users/usuario');
const Specialities = require('../../../models/specialists/specialities');

class SpecialistsController {
  async getSpecialityForUser(req, res) {
    try {
      const userId = req.userId;

      // Realiza la consulta incluyendo todas las asociaciones necesarias
      const user = await Usuario.findByPk(userId, {
        include: {
          model: Specialities,
          as: 'Speciality', // Asegúrate de que este alias coincida con el definido en el modelo Usuario
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Devuelve todos los datos del usuario y la especialización
      res.json({
        id: user.id,
        username: user.username,
        email: user.email, 
        tipoUsuarioId: user.tipoUsuarioId, 

        speciality: user.Speciality ? {
          id: user.Speciality.id,
          name: user.Speciality.name,
        } : 'No tiene especialidad asignada',
      });
    } catch (error) {
      console.error('Error al obtener la especialidad del usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

module.exports = new SpecialistsController();

