const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Section extends Model {};

Section.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Township: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Range: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        modelName: 'section'
    }
);

module.exports= Section;