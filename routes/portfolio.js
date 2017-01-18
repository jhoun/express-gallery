const express = require('express');
const router = express.Router();
const db = require('../models');
const Author = db.Author;
const Post = db.Post;

//index page
router.route('/')
  .get((req, res) => {
    Post.findAll()
    .then((post)  => {
      res.render('index', {post});
    })
    .catch((e) =>{
      console.error(e);
      res.json(e);
    });
  })
  .post((req,res) => {
    Post.create({
      author: req.body.author,
      title: req.body.title,
      link: req.body.link,
      description: req.body.description
    })
      .then((post) =>{
        res.redirect('/portfolio');
      })
      .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  });

//new page
router.route('/new')
  .get((req,res) => {
    res.render('new');
  });

//id page
router.route('/:id')
  .get((req,res) => {
    Post.findAll({
      where: {
        id : req.params.id
      }
    })
    .then((post) => {
      res.render('id', {post})
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  })
  .put((req, res) => {
    Post.update({
      author: req.body.author,
      title: req.body.title,
      link: req.body.link,
      description: req.body.link
    } , {
      where: {
        id : req.params.id
      }
    })
    .then((post) => {
      console.log('req.params.id: ', req.params.id);
      res.redirect(`/portfolio/${req.params.id}`)
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  });


//edit page
router.route('/:id/edit')
  .get((req, res) => {
    res.render('edit', {id: req.params.id})
  })

module.exports = router;