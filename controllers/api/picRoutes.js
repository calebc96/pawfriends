const router = require('express').Router();
const { Picture } = require('../../models');
const fs = require('fs');

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
    function base64_encode(file) {
        // read binary data
        var bitmap = fs.readFileSync(file);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    }
    try {
        console.log(req.body);
        console.log(req.files.photo);
        
        // const picData = await Picture.create({
        //     pet_picture: pet_picture,
        //     pet_id: pet_id
        // });
        let pic = base64_encode(req.files.photo.tempFilePath);
        let mimetype = req.files.photo.mimetype;
        console.log(pic);
        
        res.json(req.body);
    } catch (err) {
        console.log(err);
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