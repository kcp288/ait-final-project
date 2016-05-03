var express = require('express');
var router = express.Router();

// Use passport
var passport = require('passport');

var mongoose = require('mongoose');
var Bagel = mongoose.model('Bagel');
var User = mongoose.model('User');


/* Display all bagels */
router.get('/', function (req, res) {

	// If new user
	var qty = 0;

	// Else, set to user quantity
	if (req.user) {
		qty = req.user.__v; // placeholder qty
	}

	// Generate random fact and image
	var fact = getFact();
	var img = getImg(qty);
	
	// Populate page with updated quantity, umage
	User
    .findOne({username: req.params.username})
    .populate('bagels').exec(function(err, user) {
	    res.render('bagel', {
			title:"Bagel Tracker", 
			user:req.user,
			qty:qty, 
			bagelFact: fact, 
			img:img} );
    });
});

// POST to create a new bagel
router.post('/', function (req,res) {

	// create new bagel object
	var b = new Bagel({
		date: req.body.date,
		time: req.body.time,
		type: req.body.type,
		butter: req.body.butter,
		creamCheese: req.body.creamCheese,
		other: req.body.other,
		toasted: req.body.toasted,
		user: req.user._id
	});

	// Save bagel to current user
	b.save(function(err, saveBagel, count) {
		req.user.bagels.push(saveBagel._id);
		req.user.save(function(err, saveBagel, count) {
			res.redirect('/bagels');
		});
	});
});

// Login
router.get('/login', function(req, res) {
	res.render('bagel-login', { 
		title:"Login", 
	});
});

// Verify login with passport
router.post('/login', function(req, res, next) {
	passport.authenticate('local', function(err, user) {
		// If success
		if (user) {
			req.logIn(user, function(err) {
				res.redirect('/bagels');
			});
		} else {
			res.render('bagel-login', {alert: "Your login is incorrect."});
		}
	})(req, res, next);
});

// Signup
router.get('/signup', function(req, res) {
	res.render('bagel-signup', { 
		title:"Sign Up", 
	});
});

// Check signup
router.post('/signup', function(req, res) {
	User.register(new User ({ username:req.body.username}),
		req.body.password, function(err, user) {
			// If username already taken
			if (err) {
				res.render('bagel-signup', {title:"Sign Up", alert:"Username is already taken."});
			} else {
				passport.authenticate('local')(req, res, function() {
					res.redirect('/bagels');
				});
			}
		});
});

// Gets a random bagel fact from array
function getFact(){

	var bagelFacts = [
	'Plain bagels are the most popular kind! Second most popular is sesame.',
	'February 9th is National Bagels day.',
	'The worlds biggest bagel weighed 868 lbs. Not big enough tbh.',
	'Bagels are made out of bread.',
	'Bagels will always love you. Bagels will not hurt you.',
	'Worldwide, bagels are the most respected food.',
	'Bagels are the only the type of bread that are poached or boiled before they are baked. So amazing!',
	'It takes 2,231 bagels to wrap around Grand Central Station! But that would be such a waste.',
	'Studies show that bagels are natures perfect food.',
	'In June 2008, 18 sesame bagels traveled to space with astronaut Gregory Chamitoff.',
	'What do you call a bagel that can fly? A plain bagel.',
	'What does a bagel do when its locked out of the house? Calls a loxsmith!',
	'Why do seagulls live by the sea? If they lived by the bay, theyd be bagels!'];

	var idx = Math.floor(Math.random()*bagelFacts.length);
	var fact = bagelFacts[idx];
	return fact;
}

// Formats the bagel image path
function getImg(qty){
	var source = '';
	if (qty === undefined)  {
		source = "/images/bagel-00.png";
	}
	else if (qty < 8){
		source = "/images/bagel-0" + qty + ".png";
	}
	// Too many bagels! Display largest image
	else{
		source= "/images/bagel-07.png";
	}
	return source;
}

// Set up router object
module.exports = router;
