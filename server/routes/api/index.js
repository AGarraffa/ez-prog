const router = require('express').Router();
// const all the routes go here
const companyRoutes = require('./companyRoutes');
const padRoutes = require('./padRoutes');
const projectRoutes = require('./projectRoutes');
const topsRoutes = require('./topsRoutes');
const userRoutes = require('./userRoutes');
const wellRoutes = require('./wellRoutes');
const wellTopsRoutes = require('./wellTopsRoutes');


router.use('/company', companyRoutes);
router.use('pad', padRoutes);
router.use('/project', projectRoutes);
router.use('/tops', topsRoutes);
router.use('/user', userRoutes);
router.use('well', wellRoutes);
router.use('/welltops', wellTopsRoutes);

module.exports = router;

