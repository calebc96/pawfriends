const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const applicationRoutes = require('./applicationRoutes');
const petRoutes = require('./petRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
// router.use('/application', applicationRoutes);
router.use('/pet', petRoutes);
router.use('/tag', tagRoutes);

module.exports = router;
