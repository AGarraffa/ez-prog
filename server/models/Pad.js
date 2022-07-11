const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pad extends Model{}

Pad.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'company',
                key: 'id',
            },
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'project',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'pad'
    }
);

module.exports = Pad;