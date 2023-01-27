const router = require('express').Router();
const { Pet } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll();
    res.status(200).json(petData);

  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const petData = await Pet.create({
    name: req.body.name,
    location: req.body.location,
    description: req.body.size,
    size: req.body.size,
    age: req.body.age,
    breed: req.body.breed,
    });
    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!petData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
