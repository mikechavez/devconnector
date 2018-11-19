const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");

// Load User model
const User = require("../../models/user");

// @route     GET api/users/test
// @desc      Tests users route
// @access    Public
router.get("/test", (req, res) => res.json({ msg: "User works" }));

// @route     GET api/users/register
// @desc      Register user
// @access    Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists " });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm" // default avatar, if no photo provided
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.bodypassword
      });
    }
  });
});

module.exports = router;
