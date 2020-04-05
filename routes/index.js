const express = require("express");
const router = express.Router();

router.use("/File/", require("./Files"));

module.exports = router;
