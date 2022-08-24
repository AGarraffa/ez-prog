const router = require('express').Router();

const companyRoutes = require('./company-routes');
const padroutes = require('./pad-routes');
const projectRoutes = require('./project-routes');
const userRoutes = require('./user-routes');
const wellRoutes = require('./well-routes')


router.use('/company', companyRoutes);
router.use('/pad', padroutes);
router.use('/project', projectRoutes);
router.use('/user', userRoutes);
router.use('/well', wellRoutes);


// maybe refactor the controllers to export the functions and then just have the routes in a routes directory
module.exports = router;