var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('response')
});

module.exports = router;
