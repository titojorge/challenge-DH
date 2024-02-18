const db = require('../../database/models');
const Aspirante = require('../../database/models/Aspirante');

const aspiranteApiController = {
    list: (req, res) => {
        db.Aspirante
            .findAll()
            .then(aspirantes => {
                const data = []
                aspirantes.forEach(aspirante => {
                    let dataAspirante = {
                        id: aspirante.id,
                        nombre: aspirante.nombre,
                        apellido: aspirante.apellido,
                        username: aspirante.username,
                        dni: aspirante.dni,
                        rol: aspirante.rol,
                        email: aspirante.email,
                        telefono: aspirante.telefono,
                        fecha_nacimiento: aspirante.fecha_nacimiento,
                        sexo: aspirante.sexo,
                        imagen_perfil: aspirante.imagen_perfil
                    };
                    data.push(dataAspirante);
                });
                return res.json({
                    total: aspirantes.length,
                    data: data,
                })

            })
            .catch(error => {
                return res.status(500).json({ error: error.message });
            });
    },
};

module.exports = aspiranteApiController;

