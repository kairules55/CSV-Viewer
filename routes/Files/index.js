const express = require("express");
const router = express.Router();

const FileController = require("../../controllers/FileController");
const fileController = new FileController();

router.get("/new", fileController.new);
router.post("/upload", fileController.uploadFile);
router.get("/", fileController.allFiles);
router.get("/display/", fileController.displayFile);

module.exports = router;
