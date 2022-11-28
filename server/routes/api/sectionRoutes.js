const router = require('express').Router();
const {
    getSection,
    getSingleSection,
    postSection,
    updateSection,
    deleteSection
} = require('../../controllers/sectionController');

//api/section
router.route('/').get(getSection).post(postSection);
router.route('/:id').get(getSingleSection).put(updateSection).delete(deleteSection);

module.exports = router;