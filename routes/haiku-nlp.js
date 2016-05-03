// This code displays an app distinct from the AIT suite
// to be demoed in language processing class

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var PythonShell = require('python-shell');

/* Haiku generator homepage */
router.get('/', function(req, res, next) {
  res.render('haikuNLP', {layout:'haikuNLP.hbs', title: "Haiku Generator"});
});

router.post('/', function (req, res, next) {
	// Get form body here
	var pyshell = new PythonShell('driver.py', {scriptPath:"./haiku-generator/", pythonOptions: ['-u']});

	var generated = req.body.haiku;

	// Strip newline characters, etc
	generated = generated.replace(/(\r\n|\n|\r|\t)/gm,"");

	pyshell.send(generated).end(function (err) {
		if (err) throw err;
	});

	// Error handling
	if (generated.length < 150){
		res.render('haikuNLP', {layout:'haikuNLP.hbs', title: "Haiku Generator", alert: "Input is not long enough."});
	}

	else {
		var output = '';
		// message is a print statement sent back from python code
		pyshell.on('message', function (message) {		  
		  // More error handling
		  if (message.length < 1) {
		  	res.render('haikuNLP', {layout:'haikuNLP.hbs', title: "Haiku Generator", alert: "Something went wrong..."});
		  }

		  else { 
		  	output_array = message.split(' * ');
		  	console.log(output_array);
		  	for (i = 0; i < output_array.length; i++) {
		  		output += output_array[i] + "<br>";
		  	}
		  	res.render('haikuNLP', {layout:'haikuNLP.hbs', title: "Haiku Generator", haiku: output});
		  }

		});
	}
});

// Set up router object
module.exports = router;