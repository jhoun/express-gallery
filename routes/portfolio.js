const express = require('express');
const router = express.Router();
const db = require('../models');
const Author = db.Author;
const Post = db.Post;

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

router.route('/new')
  .get((req,res) => {
    res.render('new');
  });

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
    console.log('req.body: ', req.body);
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
      console.log('post: ', post);
      res.json(post)
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  });


module.exports = router;