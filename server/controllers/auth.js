const User = require("../models/user");

exports.signup = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // See if a user with the given email exists
    const user = await User.findOne({ email: email });
    // If a user with email does exist, return an error
    // If a user with email does NOT exist, create and save user record
    // Repond to request indicating the user was created
  } catch (err) {
    console.error(err);
  }
};
