const router = require("express").Router();
const { Pet, Picture, User } = require("../../models");
const FileReader = require('filereader');

router.get("/", async (req, res) => {
  try {
    const petData = await Pet.findAll();

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const petData = await Pet.create({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      size: req.body.size,
      age: req.body.age,
      breed: req.body.breed,
      user_id: req.session.user_id
    });
    res.status(200).json({pet_id: petData.id});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: "No location found with this id!" });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: Picture
        },
        {
          model: User,
          attributes: ['id','name', 'email', 'phone_number']
        }
      ]
    });

    if (!petData) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    const pet = petData.get({ plain: true });
    
    //insert into img src= ""
    const picFinal = "data:" + pet.picture.mime + ";base64," + pet.picture.pet_picture;
    let idEqual = req.session.user_id == pet.user_id;
    
    res.render("singlepet", { pet, picFinal, idEqual:idEqual});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  // find one category by its `id` value
  // be sure to include its associated Products
});

module.exports = router;
