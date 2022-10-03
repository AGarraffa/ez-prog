const { Company } = require('../models');

module.exports = {

    async getCompanies(req, res) {
        
        try {

            const companyData = await Company.findAll();

            res.status(200).json(companyData);

        } catch (err) {

            res.status(500).json(err);

        }
    },

    async getSingleCompany(req, res) {

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
    },

    async postCompany(req, res) {

        try {

            const companyData = await Company.create(req.body);

            res.status(200).json(companyData);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async updateCompany(req, res) {

        try {

            const companyData = await Company.update(
                req.body,
                { where: { id: req.params.id}});

            if (!companyData) {
                res.status(404).json({ message: 'No company with that id'})
                return;
            };

            res.status(200).json(companyData);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async deleteCompany(req, res) {

        try {
            const companyData = Company.destroy({ where: {id: req.params.id}})

            if (!companyData) {
                res.status(404).json({message: 'No company with that id'})
                return;
            }

            res.status(200).json(companyData);

        } catch (err) {
            res.status(500).json(err);
        }

    }

}