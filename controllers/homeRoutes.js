const router = require("express").Router();
const { Pet, User, Picture } = require("../models");

const withAuth = require("../utils/auth");
module.exports = router;

router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/petlist");
    return;
  }
  res.render("firstpage");
});

// router.get("/home", (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect("/petlist");
//     return;
//   }
//   res.render("firstpage");
// });

router.get("/petlist", withAuth, async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Picture,
        }
      ],
    });

    const pets = petData.map((pet) => pet.get({ plain: true }));
    
    res.render("petlist", {
      pets,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/form', withAuth, (req, res) => {
  res.render('petadoptionform', {logged_in: req.session.logged_in});
});

// If the user logged in, redirect the request to another route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/petlist");
    return;
  }

  res.render("login");
});

// To render sign up page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// router.get('/applicationform', (req,res) => {
//     try {
//         res.render('applicationform');
//     } catch(err) {
//         res.status(500).json(err);
//     }
// });

//To render firstpage
// router.get("/", (req, res) => {
//   res.render("firstpage");
// });

//To render About us page
router.get("/aboutus", (req,res) => {
  res.render("aboutus", {logged_in: req.session.logged_in});
});


// router.get("/petlist", async (req, res) => {
//   try {
//     const petData = await Pet.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//       ],
//     });

//     const pets = petData.map((pet) => pet.get({ plain: true }));
//     res.render("petlist", {
//       pets,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
