const router = require('express').Router();
const {
    getWells,
    getSingleWell,
    postWell,
    updateWell,
    deleteWell,
} = require('../../controllers/wellController');

//api/well
router.route('/').get(getWells).post(postWell);
router.route('/:id').get(getSingleWell).put(updateWell).delete(deleteWell);

module.exports = router;