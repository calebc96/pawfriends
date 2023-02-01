const router = require('express').Router();
const { Picture } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const picData = await Picture.findAll();

        const pics = picData.map((pic) =>
        pic.get({ plain: true })
        );

        res.status(200).json(pics);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/page', async (req, res) => {
    try {
        res.render('pictesting');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const picData = await Picture.create({
            pet_picture: pet_picture,
            pet_id: pet_id
        });
        res.json(picData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const picData = await Picture.destroy({
        where: {
          id: req.params.id
        }
      });
      res.json(picData);
    } catch (err){
      res.status(500).json(err);
  }});

module.exports = router;