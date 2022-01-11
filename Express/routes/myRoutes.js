const router = require("express").Router();

router.get("/get", (req, res, next) => {
    res.status(200).send("Get route accessed through routes folder");
});

module.exports = router;
