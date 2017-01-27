const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const CONFIG = require('../config/config');
const Promise = require('bluebird');
const bcrypt = require('bcrypt');
Promise.promisifyAll(bcrypt);

const authenticate = (username, password) => {

  // get user data from DB ** THE ONLY THING YOU NEED TO CHANGE WHEN YOU ARE IN EXPRESS-GALLERY
  return db.User.findOne({
    where:{username}
  })
    .then((user) => {
      if (user === null) {
        throw Error("invalid user")
      }
      return bcrypt.compareAsync(password, user.password)
      .then((isValid) =>{
        console.log('isValid: ', isValid);
        if(isValid){
          return user;
        } else {
          return false;
        }
      })
    })
}

passport.use(new LocalStrategy(
  (username, password, done) => {
    authenticate(username, password)
      .then((user) => {
        return done(null, user);
      })
      .catch((e) => {
        console.log('e: ', e);
        return done(e);
      });

  }
));
passport.serializeUser((user, done) =>{
  //user is passed inf rom Local Strategy - only runs when a user first authenticate
  //user's session has is hashed
  //user is attached to req.User

  return done(null, user);
});

passport.deserializeUser((user,done) => {
  // takes the session has and de-hashes it and checks if it's legit or not
  //Runson every subsequent request
  return done(null, user);
});


router.route('/')
  .get((req, res) => {
    res.render('login/index');
  })
  .post(passport.authenticate('local', {
    successRedirect: '/portfolio',
    failureRedirect: '/login',
  })
);


module.exports = router;