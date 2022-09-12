const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WellTops extends Model{}

WellTops.init(
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
        depth: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        well_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'well',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'welltops',
    }
);

module.exports = WellTops;