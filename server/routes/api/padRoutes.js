const router = require('express').Router();
const {
    getPads,
    getSinglePad,
    postPad,
    updatePad,
    deletePad,
} = require('../../controllers/padController');

//api/pad
router.route('/').get(getPads).post(postPad);
router.route('/:id').get(getSinglePad).put(updatePad).delete(deletePad);

module.exports = router;