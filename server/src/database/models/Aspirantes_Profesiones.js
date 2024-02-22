module.exports = (sequelize, dataTypes) => {
    let alias = 'Aspirantes_Profesiones';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_aspirante: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        id_profesion: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        fecha_creacion: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        usuario_creacion: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        fecha_modificacion: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        usuario_modificacion: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        fecha_eliminacion: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        usuario_eliminacion: {
            type: dataTypes.INTEGER,
            allowNull: true
        }

    };
    let config = {
        timestamps: false,
        tableName: 'aspirantes_profesiones'
    }
    const AspirantesProfesiones = sequelize.define(alias, cols, config); 

    AspirantesProfesiones.associate = function(models){
        AspirantesProfesiones.belongsTo(models.Aspirante, {
            as: "Aspirante",
            foreignKey: "id_aspirante"
        })
    }
    AspirantesProfesiones.associate = function(models){
        AspirantesProfesiones.belongsTo(models.Profesion, {
            as: "Profesion",
            foreignKey: "id_profesion"
        })
    }
    return AspirantesProfesiones;
};