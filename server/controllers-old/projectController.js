const { Project, Company } =  require('../models');

module.exports = {

    async getProjects(req, res) {

        try {
            const projectData = await Project.findAll({
                include: [{model: Company}]
            });

            res.status(200).json(projectData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleProject(req, res) {

        try {
            const projectData = await Project.findByPk({
                include: [{model: Company}]
            });

            if (!projectData) {
                res.status(404).json({message: 'No project with that id'})
                return;
            }

            res.status(200).json(projectData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async postProject(req, res) {

        try {
            const projectData = await Project.create(req.body);

            res.status(200).json(projectData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateProject(req, res) {

        try {
            const projectData = await Project.update(
                req.body,
                { where: {id: req.params.id}}
            );

            if (!projectData) {
                res.status(404).json({message: 'No proejct with that id'})
                return;
            }

            res.status(200).json(projectData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteProject(req, res) {

        try {
            const projectData = await Project.destroy({where: {id: req.params.id}});

            if (!projectData) {
                res.status(404).json({message: 'No project with that id'});
                return;
            }

            res.status(200).json(projectData);

        } catch (err) {
            res.status(500).json(err);
        }
    }

}