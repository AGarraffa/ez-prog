const router = require('express').Router();
const { Company } = require('../../models');

// api/company endpoint

router.get('/', async (req, res) => {
    
    try {

        const companyData = await Company.findAll();

        res.status(200).json(companyData);

    } catch (err) {

        res.status(500).json(err);

    }
});

router.get('/:id', async (req, res) => {

    try {

        const companyData = await Company.findByPk(req.params.id);

        if (!companyData) {

            res.status(404).json({message: 'No company with that id'})
            return;
        }

        res.status(200).json(companyData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {

        const companyData = await Company.create(req.body);

        res.status(200).json(companyData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {

    try {

        const companyData = await Company.update(
            req.body,
            { where: { id: req.params.id}});

        if (!companyData) {
            res.status(404).json({ message: 'No company with that id'})
        };

        res.status(200).json(companyData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {

    try {

        const companyData = Company.destroy({ where: {id: req.params.id}})

        if (!companyData) {
            res.status(404).json({message: 'No company with that id'})
        }

        res.status(200).json(companyData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router