const express = require('express');
const router = express.Router();
const db = require('../models');
const Author = db.Author;



router.route('/')
  .get((req,res) => {
    console.log('adfllkajdf');
  })
  .post((req,res) => {
    console.log('hit');
    Author.create({name: req.body.author})
      .then((author) =>{
        res.json(author);
      });
  });

module.exports = router;