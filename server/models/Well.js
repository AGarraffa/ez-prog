const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Well extends Model {}

Well.init(
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
        API: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pad_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pad',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'well',
    }
);

module.exports = Well;