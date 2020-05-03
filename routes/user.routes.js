const { Router } = require("express");
const router = Router();
const verify = require("./../auth/verify");

const userController = require("./../controllers/user.controller");

router.get("/", userController.get);
router.get("/:id", userController.get);
router.post("/", userController.post);
router.put("/:id", userController.put);
router.delete("/:id", userController.delete);

module.exports = router;
