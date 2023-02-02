const router = require('express').Router();
const { Picture } = require('../../models');
const fs = require('fs');
const FileReader = require('filereader');

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
        
        let pic = fs.readFileSync(req.files.photo.tempFilePath, 'base64');
        let mimetype = req.files.photo.mimetype;
        const picData = await Picture.create({
            mime: mimetype,
            pet_picture: pic,
            pet_id: 1
        });

        res.status(200).json(picData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

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