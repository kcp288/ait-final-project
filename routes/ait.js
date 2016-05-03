var express = require('express');
var router = express.Router();

// For movies DB
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

/* AIT Projects home page */
router.get('/', function (req, res) {
	res.render('ait', {title: "AIT Projects"});
});

/* HW 7 Matchicode */

router.get('/matchicode', function(req, res) {
	res.render('matchicode', {title: "M▲TCHICO☃E"});
});

// Set up birds array
var birds = [];
birds.push({'name': 'Bald Eagle', 'sightings': 3});
birds.push({'name': 'Yellow Billed Duck', 'sightings': 7});
birds.push({'name': 'Great Cormorant', 'sightings': 4});

/* HW 4 BUSY BIRDER */
// Home page

router.get('/birds', function(req, res){
	res.render('birds', {layout:'birds.hbs'}); 
});

// Birds
router.get('/birds/list/', function(req, res){
	// Default minval is 0, but can be set
	var minVal = 0;

	if (req.session.minVal){
		minVal = req.session.minVal;
	}
	
	// Filter array and set equal to global
	var filterBirds = [];
	birds.filter(function(ele){
		if (ele.sightings >= minVal) {
			filterBirds.push(ele);
		}
	});

	// Set filtered list to session variable
	req.session.yourMinimumValueVariable = filterBirds;

	// Send filtered list to be rendered
	req.birds = filterBirds;
	res.render('birds-list', {layout:'birds-list.hbs', birds:req.birds}); 
});

router.post('/birds/list/', function (req,res) {
	// Set input body to bird
	var bird = req.body.bird;
	var found = false;

	// Check to see if bird is already in array
	var index = birds.filter(function(ele) {
		if (ele.name === bird){
			found = true;
			return ele;
		}
	});

	// If yes, then update sightings number
	if (found){
		index[0].sightings = index[0].sightings+1; // funkiness
		res.redirect('./list');
	}

	// Else, add new bird to array
	else {
		var newBird = {'name': bird, 'sightings': 1};
		birds.push(newBird);
		res.redirect('./list');
	}
});

// Settings
router.get('/birds/settings', function(req, res){
	// Passing in minVal to prefill form
	res.render('birds-settings', {layout:'birds-settings.hbs', minVal:req.session.minVal}); 
});

router.post('/birds/settings', function(req, res){
	// Add new minval from body
	var minVal = req.body.minVal;
	req.session.minVal = minVal;

	res.redirect('./list');
});

/* HW 5 MOVIES DB */

// Get movies
router.get('/movies-db', function(req, res) {

	Movie.find({}, function(err, movies, count) {
		res.render('movies', {layout:'movies.hbs', 'movies':movies});
	});
});

// Using AJAX
router.get('/api/movies-db', function(req, res) {
	var movieFilter = {};
	var searchExists = false;

	if (req.query.director) {
	  movieFilter.director = req.query.director;
	  searchExists = true;
	}
	Movie.find(movieFilter, function(err, movies, count) {
		res.send(movies);
	});
});

// Set up router object
module.exports = router;
