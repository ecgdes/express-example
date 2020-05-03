const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("./../models/user.model");
const router = Router();

router.post("/register", async (req, res) => {
  const user = new UserModel(req.body);
  const salt = bcrypt.genSaltSync(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(user);
});

router.post("/login", async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    res.status(400).send("Wrong email");
  }
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordValid) res.status(400).send("Wrong password");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.header("auth-token", token).send(token);
});

module.exports = router;
