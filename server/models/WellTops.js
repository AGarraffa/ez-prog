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
        ssd: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tvd: {
            type: DataTypes.INTEGER,
            allowNull: true,
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

// NB: tops should be entered in ssd on the FE. tvd will be calculated based on the elevation + kb values from the well.