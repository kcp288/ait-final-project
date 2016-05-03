var mongoose = require('mongoose'),
    passport = require('passport'),
    User = mongoose.model('User'),
    LocalStrategy = require('passport-local').Strategy;

//Passport-local mongoose does authentication automatically
passport.use(new LocalStrategy(User.authenticate()));

// Use the passport-local-mongoose for serialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());