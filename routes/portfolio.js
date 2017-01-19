const express = require('express');
const router = express.Router();
const db = require('../models');
const Author = db.Author;
const Project = db.Project;

//index page
router.route('/')
  .get((req, res) => {
    Project.findAll()
    .then((project)  => {
      res.render('index', {project});
    })
    .catch((e) =>{
      console.error(e);
      res.json(e);
    });
  })
  .post((req,res) => {
    console.log('req.body: ', req.body);
    Project.create({
      author: req.body.author,
      title: req.body.title,
      link: req.body.link,
      description: req.body.description
    })
      .then((project) =>{
        console.log('project: ', project);
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
    Project.findAll({
      where: {
        id : req.params.id
      }
    })
    .then((project) => {
      res.render('id', {project})
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  })
  .put((req, res) => {
    Project.update({
      author: req.body.author,
      title: req.body.title,
      link: req.body.link,
      description: req.body.link
    } , {
      where: {
        id : req.params.id
      }
    })
    .then((project) => {
      console.log('req.params.id: ', req.params.id);
      res.redirect(`/portfolio/${req.params.id}`)
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  })
  .delete((req, res) => {
    console.log('req.body: ', req.body);
    Project.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((project) => {
      res.redirect('/portfolio')
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