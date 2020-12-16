const router = require("express").Router();
const path =  require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

router.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/add.html"));
});

router.get("/find", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/find.html"));
});

module.exports = router;