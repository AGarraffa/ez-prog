const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    postUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

//api/user
router.route('/').get(getUsers).post(postUser);
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;