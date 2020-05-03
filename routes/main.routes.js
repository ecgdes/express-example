const { Router } = require("express");

const router = Router();

const status = require("./../utils/crud.response");

router.get("/", (req, res) => {
  res.send(status.OK);
});

module.exports = router;
