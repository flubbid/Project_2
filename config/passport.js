var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(acccesToken, refreshToken, profile, cb){
    // a user has loged in with OAuth
    User.findone({ 'googleId': profile.id}, function(err, student){
        if (err) return cb (err);
        if (user){
            return cb (null, user);
        } else {
            //we have a new user via OAuth!
            var newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newUser.save(function(err){
                if (err) return cb(err);
                return cb(null, newUser);
            });
        }
    }
    )
}));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, student);
    });
});