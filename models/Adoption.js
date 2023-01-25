const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Adoption extends Model{}

Adoption.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        adoption_prompt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        new_pet_owner: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        type_of_housing: {
            type: DataTypes.STRING,
            allowNull: false
        },
        has_allergies: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        pet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pet',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'adoption',
    }
);

module.exports = Adoption;