const {Section, Project } = require('../models');

module.exports = {

    async getSection(req, res) {

        try {

            const sectionData = await Section.findAll({
                include: [{model: Project}]
            });

            res.status(200).json(sectionData)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleSection(req, res) {

        try {

            const sectionData = await Section.findByPk(req.params.id, {
                incluse: [{model: Project}]
            });

            if (!sectionData) {
                res.status(400).json({message: 'No section with that id'})
                return;
            };

            res.status(200).json(sectionData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async postSection(req, res) {

        try {

            const sectionData = await Section.create(req.body);

            res.status(200).json(sectionData);

        } catch (err) {
            res.status(500).json(sectionData);
        }
    },

    async updateSection(req, res) {

        try {

            const sectionData = await Section.update(
                req.body,
                {where: {id: req.params.id}}
            );

            if (!sectionData) {
                res.status(400).json({message: 'No section with that id'})
                return;
            };

            res.status(200).json(sectionData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteSection(req, res) {

        try {
            const sectionData = await Section.destroy({ where: {id: req.params.id}});

            if (!sectionData) {
                res.status(400).json({message: 'No section with that id'});
                return;
            }

            res.statuss(200).json(sectionData);

        } catch (err) {
            res.status(500).json(err)
        }
    },
}