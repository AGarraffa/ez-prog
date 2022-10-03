const router = require('express').Router();
const { Pad, Project, Company } = require('../../models');

// api/pad endpoint

router.get('/', async (req, res) => {

    try {

        const padData = await Pad.findAll({
            include: [{model: Project, Company}]
        });

        res.status(200).json(padData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try {
        
        const padData = await Pad.findByPk(req.params.id, {
            include: [{model: Project, Company}]
        });

        if (!padData) {
            res.status(404).json({message: 'No pad with that id'})
            return;
        };

        res.status(200).json(padData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {

        const padData = await Pad.create(req.body);

        res.status(200).json(padData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {

    try {

        const padData = await Pad.update(
            req.body,
            { where: {id: req.params.id}}
        );

        if (!padData) {
            res.status(404).json({message: 'No pad with that id'})
            return;
        };

        res.status(200).json(padData);
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {

    try {

        const padData = Pad.destroy({ where: {id: req.params.id}});

        if (!padData) {
            res.status(404).json({message: 'No pad with that id'})
            return;
        };

        res.status(200).json(padData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;