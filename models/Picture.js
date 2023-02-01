const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Picture extends Model{}

Picture.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    pet_picture: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    pet_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pet',
            key: 'id'
        }
    }

},
{
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
});

module.exports = Picture;