const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

router.route('/')
  .get((req, res) => {
    res.render('register/index');
  })
  .post((req,res) => {
    console.log('req: ', req.body);
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password
    })
      .then((user) =>{
        res.redirect('register/success');
      })
      .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  });


router.route('/success')
  .get((req,res) => {
    res.render('register/success');
  });

module.exports = router;