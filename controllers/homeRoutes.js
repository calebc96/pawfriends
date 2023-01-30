const router = require('express').Router();
const { Pet, User } = require('../models');
module.exports = router;

router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const pets = petData.map((pet) => pet.get({ plain: true}));
   res.render('homepage', {
    pets,
    logged_in: req.session.logged_in
   });
   
   
   
    } catch(err) {
        res.status(500).json(err);
    }
});