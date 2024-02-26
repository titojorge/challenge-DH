const db = require("../../database/models");
const Aspirante = require("../../database/models/Aspirante");
const Profesion = require("../../database/models/Profesion");

const aspiranteApiController = {
  list: (req, res) => {

    db.Aspirante.findAll({
      include: [{ association: "Profesion" }],
    })
      .then((aspirantes) => {
        const data = [];
        aspirantes.forEach((aspirante) => {
          let dataAspirante = {
            id: aspirante.id,
            nombres: aspirante.nombres,
            apellidos: aspirante.apellidos,
            username: aspirante.username,
            dni: aspirante.dni,
            rol: aspirante.rol,
            email: aspirante.email,
            telefono: aspirante.telefono,
            fecha_nacimiento: aspirante.fecha_nacimiento,
            perfil_linkedin: aspirante.perfil_linkedin,
            sexo: aspirante.sexo,
            imagen_perfil: aspirante.imagen_perfil,
            profesion: aspirante.dataValues.Profesion.dataValues.nombre_profesion,
          };
          data.push(dataAspirante);
        });
        return res.json({
          total: aspirantes.length,
          aspirantes: data,
        });
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });

  },
};

module.exports = aspiranteApiController;
