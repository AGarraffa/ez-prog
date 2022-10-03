const router = require('express').Router();
const {
    getCompanies,
    getSingleCompany,
    postCompany,
    updateCompany,
    deleteCompany
} = require('../../controllers/companyController');

//api/company
router.route('/').get(getCompanies).post(postCompany);
router.route('/:id').get(getSingleCompany).put(updateCompany).delete(deleteCompany);

module.exports = router;


