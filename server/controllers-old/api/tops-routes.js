const router = require('express').Router();
const { Project, Tops } = require('../../models');

// api/tops endpoint

router.get('/', async (req, res) => {

    try {
        const topsData = await Tops.findAll({
            include: [{model:Project}]
        });

        res.status(200).json(topsData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

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
});

router.post('/', async (req, res) => {

    try {

        const topsData = await Tops.create(req.body);

        res.status(200).json(topsData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {

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
});

router.delete('/:id', async (req, res) => {

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
});

module.exports = router;
