const sequelize = require('../config/connection');
const { Company, Pad, Project, User, Well } = require('../models');

const companyData = require('./company.json');
const padData = require('./pad.json');
const projectData = require('./project.json');
const userData = require('./user.json');
const wellData = require('./well.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const company = await Company.bulkCreate(companyData);
    const pad = await Pad.bulkCreate(padData);
    const project = await Project.bulkCreate(projectData);
    const user = await User.bulkCreate(userData, {
        individualHooks: true, returning: true 
    });
    const well = await Well.bulkCreate(wellData);

    process.exit(0);
};

seedDatabase();