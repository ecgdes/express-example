const { Router } = require("express");
const router = Router();
const verify = require("./../auth/verify");

const postController = require("./../controllers/post.controller");

router.get("/", postController.get);
router.get("/:id", postController.get);
router.post("/", postController.post);
router.put("/:id", postController.put);
router.delete("/:id", postController.delete);

module.exports = router;
