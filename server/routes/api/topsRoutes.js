const router = require('express').Router();
const {
    getTops,
    getSingleTop,
    postTop,
    updateTop,
    deleteTop,
} = require('../../controllers/topsController');

//api/tops
router.route('/').get(getTops).post(postTop);
router.route('/:id').get(getSingleTop).put(updateTop).delete(deleteTop);

module.exports = router;