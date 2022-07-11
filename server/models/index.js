const User = require('./User');
const Pad = require('./Pad');
const Project = require('./Project');
const Company = require('./Company');
const Well = require('./Well');

Company.hasMany(User);
User.belongsTo(Company, { foreignKey: 'company_id'});

Company.hasMany(Project);
Project.belongsTo(Company, { foreignKey: 'company_id'});

Company.hasMany(Pad);
Pad.belongsTo(Company, { foreignKey: 'company_id'});

Project.hasMany(Pad);
Pad.belongsTo(Project, { foreignKey: 'project_id'});

Pad.hasMany(Well);
Well.belongsTo(Pad, { foreignKey: 'pad_id'});

module.exports = { User, Pad, Project, Company, Well };