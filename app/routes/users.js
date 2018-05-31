var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'yeswecan',
  database:'behealthy',
});
router.post('/', function(req, res, next) {

  res.send({message:'teste'});
});

module.exports = router;
