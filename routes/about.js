const express = require('express');
const router = express.Router();


router.route('/')
.get((req, res) => {
  console.log('req: ', req);
  res.render('about/about');
});

module.exports = router;