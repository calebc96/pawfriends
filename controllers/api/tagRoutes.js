const router = require('express').Router();
const { Tag } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const tagData = await Tag.create({
            tag_name: req.body.tag_name
        });

        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err);
      }
});

router.put('/:id', async (req, res) => {
    // update a tag's name by its `id` value
    try {
      const tagData = await Tag.update(
        {
          tag_name: req.body.tag_name
        },
        {
          where: {
            id: req.params.id
          }
        }
      );
  
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with that id!' });
        return;
      }
  
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with that id!' })
      }
  
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
