const db = require('../../database/models');
const Profesion = require('../../database/models/Profesion')

const profesionApiController= {
    
    list: (req,res) =>{
        db.Profesion.findAll()
            .then(profesiones =>{

                const data= []
                profesiones.forEach(profesion =>{
                    let dataProfesion={
                        id: profesion.id,
                        nombre_profesion: profesion.nombre_profesion,
                        fecha_creacion: profesion.fecha_creacion,
                        usuario_creacion: profesion.usuario_creacion,
                        fecha_modificacion: profesion.fecha_modificacion,
                        usuario_modificacion: profesion.usuario_modificacion,
                        fecha_eliminacion: profesion.fecha_eliminacion,
                        usuario_eliminacion: profesion.usuario_eliminacion
                    }
                    data.push(dataProfesion)
                })
                return res.json({
                    total : profesiones.length,
                    data: data
                })
            })
            .catch(error =>{
                return res.status(500).json({ error: error.message });
            })
            }
    
}


module.exports= profesionApiController