const passport = require("passport")
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth2").Strategy

passport.serializeUser((user, done) => {
  done(null, user);
})
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
 clientID: "285629337150-1r0qe4cspfjd6n8d5onbtnouvejbkbcd.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "https://test-one-delta-84.vercel.app/google/callback",
  passReqToCallback: true
}, (request, accessToken, refrestToken, profile, done) => {
  // console.log(profile);//! -------> Consoling profile in server
  return done(null, profile)
}))
