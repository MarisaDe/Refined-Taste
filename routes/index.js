var express = require('express');
var router = express.Router();
var data = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
console.log(data);

  res.render('index', { title: 'Express 12345', foo: data });
});

router.post('/', function(req, res, next) {
console.log(req.body);

  res.render('index', { title: 'Express 12345', foo: data });
});



module.exports = router;
