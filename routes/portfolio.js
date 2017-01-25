const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;

//index page
router.route('/')
  .get((req, res) => {
    Project.findAll()
    .then((project)  => {
      res.render('portfolio/index', {project});
    })
    .catch((e) =>{
      console.error(e);
      res.json(e);
    });
  })
  .post((req,res) => {
    Project.create({
      author: req.body.author,
      title: req.body.title,
      link: req.body.link,
      description: req.body.description
    })
      .then((project) =>{
        res.redirect('/portfolio');
      })
      .catch((e) =>{
       res.redirect('/portfolio/error');
      });
  });

//error page
router.route('/error')
  .get((req,res) => {
    res.render('portfolio/validationErrors', {messages: req.flash('info') })
  })

//new page
router.route('/new')
  .get((req,res) => {
    res.render('portfolio/new');
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
      res.render('portfolio/id', {project})
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
    res.render('portfolio/edit', {id: req.params.id})
  })


module.exports = router;