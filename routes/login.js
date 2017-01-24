const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const CONFIG = require('../config/config');
const bcrypt = require('bcrypt');

// const myPlainTextPassword = "ILikeBacon";


// bcrypt.genSalt(saltRounds, (err,salt) => {
//   if (err) {
//     console.error(err);
//   }
//   //runs only when new user is registered
//   bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
//     // save this hash to your DB
//     // console.log('hash: ', hash);

//   bcrypt.compare(myPlainTextPassword, hash, (err, result) => {
//       if (err){
//         console.error(err);
//       }
//       //if it's the same - returns true
//       // console.log('result1: ', result);
//     });
//   });
// });

// const authenticate = (username, password) => {

//   // get user data from DB ** THE ONLY THING YOU NEED TO CHANGE WHEN YOU ARE IN EXPRESS-GALLERY
//   return db.User.findOne({
//     where:{username}
//   })
//     .then((user) => {
//       if (user === null) {
//         throw Error("invalid user")
//       }
//       // if (user.password !== password){
//       //   throw Error("invalid password")
//       // }
//       console.log('user.password: ', user.password);
//       console.log('password: ', password);
//       bcrypt.compare(password, user.password, (err, result) =>{
//         if (result === true){
//           console.log('result: ', result);
//           console.log('user: ', user);
//           return user;
//         }
//         if (result === false){
//           throw Error("invalid password");
//         }
//       })
//     })
// }

passport.use(new LocalStrategy(
  (username, password, done) => {
    return db.User.findOne({
    where:{username}
  })
    .then((user) => {
      if (user === null) {
        throw Error("invalid user")
      }
      // if (user.password !== password){
      //   throw Error("invalid password")
      // }
      console.log('user.password: ', user.password);
      console.log('password: ', password);
      bcrypt.compare(password, user.password, (err, result) =>{
        if (result === true){
          console.log('result: ', result);
          console.log('user: ', user);
          return done(null,user);
        }
        if (result === false){
          return done(null, false);
        }
      })
    })

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