const router = require('express').Router();
const userRoutes = require('./userRoutes');

const petRoutes = require('./petRoutes');
const tagRoutes = require('./tagRoutes');
const formRoutes = require('./formRoutes');

router.use('/users', userRoutes);
router.use('/pet', petRoutes);
router.use('/tag', tagRoutes);
router.use('/form', formRoutes);

module.exports = router;
