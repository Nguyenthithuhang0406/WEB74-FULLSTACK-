const logger = require("../middlewares/logger");

const router = require("express").Router();

// router.use(logger);

router.use((req, res, next) => {
    res.status = 201;
    next();
});

router.get("/", (req, res) => {
    console.log(res.status);
    res.json("get users");
});

module.exports = router;