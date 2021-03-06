const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;
const User = db.User;
const whichError  = require('../errors/errors')

//index page
router.route('/')
  .get((req, res) => {
    Project.findAll()
    .then((project)  => {
      console.log('req.user: ', req.user);
      res.render('portfolio/index', {project, user: req.user});
    })
    .catch((e) =>{
      console.error(e);
      res.json(e);
    });
  })
  .post((req,res) => {
    Project.create({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link
    })
      .then((project) =>{
        res.redirect('/portfolio');
      })
      .catch((e) =>{
        whichError(e.errors[0].message, req);
       res.redirect('/portfolio/new');
      });
  });

//error page
router.route('/error')
  .get((req,res) => {
    res.render('portfolio/validationErrors', {req: "error!" })
  })

//new page
router.route('/new')
  .get((req,res) => {
    res.render('portfolio/new', {
      message: req.flash('message')
    });
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
      console.log('req.user: ', req.user);
      res.render('portfolio/id', {project, user: req.user})
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  })
  .put((req, res) => {
    Project.update({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link
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

//about page
router.route('/about')
  .get((req,res) => {
    res.render('/portfolio/new');
  });


module.exports = router;