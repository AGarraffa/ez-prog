const router = require('express').Router();
const { Well, Pad } = require('../../models');

// api/well endpoint

router.get('/', async (req, res) => {
    
    try {

        const wellData = await Well.findAll({
            include: [{model: Pad}]
        });

        res.status(200).json(wellData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try {

        const wellData = await Well.findByPk(req.params.id, {
            include: [{model: Pad}]
        });

        if (!wellData) {
            res.status(404).json({message: 'No well with that id'})
            return;
        };

        res.status(200).json(wellData);

    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {

    try {

        const wellData = await Well.create(req.body);

        res.status(200).json(wellData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {

    try {

        const wellData = await Well.update(
            req.body,
            {where: {id: req.params.id}}
        );

        if (!wellData) {
            res.status(400).json({message: 'No well with that id'});
            return;
        }

        res.status(200).json(wellData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {

    try {

        const wellData = await Well.destroy({ where: {id: req.params.id}});

        if (!wellData) {
            res.status(404).json({message: 'No well with that id'});
            return;
        }

        res.status(200).json(wellData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;