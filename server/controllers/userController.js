const { User, Company } = require('../models');

module.exports = {

    async getUsers(req, res) {

        try {

            const userData = await User.findAll({
                include: [{model: User}]
            });

            res.status(200).json(userData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {

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
    },

    async postUser(req, res) {

        try {

            const userData = await User.create(req.body);

            res.status(200).json(userData);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {

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
    },

    async deleteUser(req, res) {

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
    },

}