// Set up mongoose and passport extension
var mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose');

// Bagel schema
var Bagel = new mongoose.Schema({
	date: Date,
	type: String,
	butter: Boolean,
	creamCheese: Boolean,
	other: String,
	toasted: Boolean,
	user:{type:mongoose.Schema.Types.ObjectId, ref: 'User'}, // Stores user
});

// User data, from passport
var User = new mongoose.Schema({
	bagels:[{type: mongoose.Schema.Types.ObjectId, ref:'Bagel'}]
});
User.plugin(passportLocalMongoose);

// Movie schema
var Movie = new mongoose.Schema({
  title: String, 
  director: String,
  year: Number,
});

// Register models
mongoose.model('Bagel', Bagel);
mongoose.model('Movie', Movie);
mongoose.model('User', User);

mongoose.connect('mongodb://localhost/bageldb');
