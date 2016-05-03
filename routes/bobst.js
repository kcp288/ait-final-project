var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

/* Single GET request that serves printer data */
router.get('/', function(req, res, next) {
  // var printerData = get printer data here
  res.render('bobst', { layout:'bobst.hbs', title: "Where Can I Print In Bobst?"});
});

// Set up router object
module.exports = router;

