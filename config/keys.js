//keys.js  - figure out what set of credentials to return

/* if (process.env.NODE_ENV == "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in dev - return the dev keys
  module.exports = require("./dev");
} */

module.exports = {
  googleClientID:
    "735081351962-a29ekoe2v21m2h26l011dn912fh9bmod.apps.googleusercontent.com",
  googleClientSecret: "8O3PW0OnehtwvPKCRCC1VOWY",
  mongoURI: "mongodb://jzief:password1@ds149146.mlab.com:49146/emaily-dev",
  cookiekey: "ihfkldkljwpejpwnpwnepwprogwpenmblnpkrqtkpogwoe"
};
