const express = require('express');
const router = express.Router();
const db = require('../models');

router.route('/')
  .get((req, res) => {
    console.log('res: ', res);
    res.render('login/index');
  })


module.exports = router;