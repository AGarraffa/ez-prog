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
            allowNull: true,
        },
        SHLFootage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        SHLLat: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        SHLLon: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        BHLFootage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        BHLLat: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        BHLLon: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        target: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        kb: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        elev: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        logProg: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rig: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pad_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pad',
                key: 'id',
            },
        },
        tops: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'welltops',
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
