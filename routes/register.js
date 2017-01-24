const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.route('/')
  .get((req, res) => {
    res.render('register/index');
  })
  .post((req,res, next) => {
    bcrypt.genSalt(saltRounds, (err,salt) => {
      if (err) {
        console.error(err)
        next(err);
      }
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          console.error(err)
          next(err);
        }
        User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          username: req.body.username,
          password: hash
        })
        res.redirect('register/success');
      })
    })
  })



router.route('/success')
  .get((req,res) => {
    res.render('register/success');
  });

module.exports = router;