const express = require('express');
const router = express.Router();


router.route('/')
.get((req, res) => {
  console.log('req: ', req);
  req.logout();
  res.redirect('/login');
});

module.exports = router;