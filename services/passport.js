const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      /*  console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile); */
      const existingUser = await User.findOne({ googleId: profile.id });
      //we have a record with given profile
      if (existingUser) {
        return done(null, existingUser);
      } else {
        //make new record
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
