const router = require('express').Router();
const {
    getProjects,
    getSingleProject,
    postProject,
    updateProject,
    deleteProject,
} = require('../../controllers/projectController');

//api/project
router.route('/').get(getProjects).post(postProject);
router.route('/:id').get(getSingleProject).put(updateProject).delete(deleteProject);

module.exports = router;