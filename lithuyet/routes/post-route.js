const checkAuthMiddleware = require("../middlewares/checkAuth-middleware");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.json("get post");
});

router.use(checkAuthMiddleware);

router.post("/", (req, res) => {
    res.json("create post");
});
router.put("/", (req, res) => {
    res.json("update post");
});
router.delete("/", (req, res) => {
    res.json("delete post");
});

module.exports = router;