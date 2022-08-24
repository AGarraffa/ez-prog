const router = require('express').Router();

// const companyRoutes = require('./company-routes');
// const padroutes = require('./pad-routes');
// const projectRoutes = require('./project-routes');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);


// maybe refactor the controllers to export the functions and then just have the routes in a routes directory
module.exports = router;