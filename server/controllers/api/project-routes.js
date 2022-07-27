const router = require('express').Router();
const { Project, Company } =  require('../../models');

// api/project endpoint

router.get('/', async (req, res) => {

    try {

        const projectData = await Project.findAll({
            include: [{model: Company}]
        });

        res.status(200).json(projectData);

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {

    try {

        const projectData = await Project.findByPk({
            include: [{model: Company}]
        });

        if (!projectData) {
            res.status(404).json({message: 'No project with that id'})
        }

        res.status(200).json(projectData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {

        const projectData = await Project.create(req.body);

        res.status(200).json(projectData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {

    try {

        const projectData = await Project.update(
            req.body,
            { where: {id: req.params.id}}
        );

        if (!projectData) {
            res.status(404).json({message: 'No proejct with that id'})
        }

        res.status(200).json(projectData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {

    try {

        const projectData = await Project.destroy({where: {id: req.params.id}});

        if (!projectData) {
            res.status(404).json({message: 'No project with that id'});
        }

        res.status(200).json(projectData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;