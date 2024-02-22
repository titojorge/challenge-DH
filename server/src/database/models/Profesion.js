module.exports= (sequelize, dataTypes) => {
    let alias = Profesion
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,      /* Definicion de columnas */
            primaryKey: true,
            autoIncrement: true
        },
        nombre_profesion: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        fecha_creacion:{
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        usuario_creacion:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        fecha_modificacion: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        usuario_modificacion:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        fecha_eliminacion:{
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        usuario_eliminacion:{
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        timestamps: false,
        tableName: 'profesiones',
        deletedAt: false
    }
    const Profesion = sequelize.define(alias, cols, config)

    /* RELACIONES */

    Profesion.associate= (models) =>{
        Profesion.belongsToMany(models.Aspirante,{
            as: 'aspirantes',
            through: 'aspirantes_profesiones',
            foreignKey: 'profesion_id',
            otherKey: 'aspirante_id',
            timestamps: false
        })
    }

    return Profesion
}