module.exports = (sequelize, dataTypes) => {
    let alias = 'Aspirante';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombres: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        apellidos: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        telefono: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        perfil_linkedin: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        fecha_nacimiento: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        sexo: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        imagen_perfil: {
            type: dataTypes.STRING(100),
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
        tableName: 'aspirantes',
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        deletedAt: false
    }
    const Aspirante = sequelize.define(alias, cols, config); 

    // Aspirante.associate = function(models){
    //     Aspirante.belongsTo(models.CategoryProduct, {
    //         as: "categoriaProduct",
    //         foreignKey: "category_producto_id"
    //     })
    // }
 
    return Aspirante
};