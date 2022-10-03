const router = require('express').Router();
const {
    getWellTops,
    getSingleWellTop,
    postWellTop,
    updateWellTop,
    deleteWellTop,
} = require('../../controllers/wellTopsController');

//api/welltops
router.route('/').get(getWellTops).post(postWellTop);
router.route('/:id').get(getSingleWellTop).put(updateWellTop).delete(deleteWellTop);

module.exports = router;