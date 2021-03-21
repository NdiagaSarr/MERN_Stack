const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const gender = req.body.gender;
    const dob = Date.parse(req.body.dob);
    const news = Boolean.parse(req.body.news);
    const email = req.body.email;
    const photo = req.body.photo;

  const newUser = new User({
      username,
      gender,
      dob,
      news,
      email,
      photo
    });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;