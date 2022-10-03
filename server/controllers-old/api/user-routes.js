const router = require('express').Router();
const { User, Company } = require('../../models');

//api/user endpoint

router.get('/', async (req, res) => { 

    try {

        const userData = await User.findAll({
            include: [{model: User}]
        });

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try {

        const userData = await User.findByPk(req.params.id, {
            include: [{model: User}]
        });

        if (!userData) {
            res.status(404).json({message: 'No user with that id'})
            return;
        }

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {

        const userData = await User.create(req.body);

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put ('/:id', async (req, res) => {

    try {

        const userData = await User.update(
            req.body,
            {where: {id: req.params.id}}
        )

        if (!userData) {
            res.status(404).json({message: 'No user with that id'})
            return;
        }

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete(':id', async (req, res) => {

    try {

        const userData = User.destroy({where: {id: req.params.id}})

        if (!userData) {
            res.status(404).json({message: 'No user with that id'});
            return;
        }

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;