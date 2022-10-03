const router = require('express').Router();
const { Well, WellTops } = require('../../models');

//api/welltops endpoint

router.get('/', async (req, res) => {
    
    try {

        const wellTopsData = await WellTops.findAll({
            include: [{model: Well}]
        });

        res.status(200).json(wellTopsData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try {

        const wellTopsData = await WellTops.findByPk(req.params.id, {
            include: [{model: Well}]
        });

        if (!wellTopsData) {
            res.status(404).json({message: 'No top with that id'})
            return;
        };

        res.status(200).json(wellTopsData);

    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {

    try {

        const wellTopsData = await WellTops.create(req.body);

        res.status(200).json(wellTopsData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {

    try {

        const wellTopsData = await WellTops.update(
            req.body,
            {where: {id: req.params.id}}
        );

        if (!wellTopsData) {
            res.status(400).json({message: 'No top with that id'});
            return;
        }

        res.status(200).json(wellTopsData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {

    try {

        const wellTopsData = await WellTops.destroy({ where: {id: req.params.id}});

        if (!wellTopsData) {
            res.status(404).json({message: 'No top with that id'});
            return;
        }

        res.status(200).json(wellTopsData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;