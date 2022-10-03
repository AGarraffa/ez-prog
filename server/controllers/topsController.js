const { Project, Tops } = require('../models');

module.exports = {

    async getTops(req, res) {

        try {
            const topsData = await Tops.findAll({
                include: [{model:Project}]
            });

            res.status(200).json(topsData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleTop(req, res) {

        try {
            const topsData = await Tops.findByPk(
                req.params.id, 
                {include: [{model: Project}]}
                );

            if (!topsData) {
                res.status(400).json({message: 'No top with that id'})
                return;
            };

            res.status(200).json(topsData)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async postTop(req, res) {

        try {

            const topsData = await Tops.create(req.body);

            res.status(200).json(topsData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateTop(req, res) {

        try {

            const topsData = await Tops.update(
                req.body,
                {where: {id: req.params.id}}
            );

            if (!topsData) {
                res.status(400).json({message: 'No top with that id'})
                return;
            }

            res.status(200).json(topsData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteTop(req, res) {

        try {

            const topsData = await Tops.destroy({ where: { id: req.params.id}})

            if (!topsData) {
                res.status(400).json({message: 'No top with that id'});
                return;
            }

            res.status(200).json(topsData);

        } catch (err) {
            res.status(500).json(err);
        }
    },
}
