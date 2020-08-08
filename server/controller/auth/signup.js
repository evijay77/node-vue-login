const models = require('../../models');
const bcrypt = require('bcryptjs');

const signup = async function (req, res) {
  req.body.userType = "USER";
  bcrypt.genSalt(10, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      if (err) throw err;
      req.body.password = hash;
      let user = new models.User(req.body);
      try {
        await user.save();
        res.json({
          message: "User Created"
        })
      } catch (error) {
        console.log(error)
        res.status(500).json({
          message: "User not created"
        })
      }
    });
  });

}

module.exports = signup;
