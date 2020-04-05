const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FILE_PATH = path.join("uploads/csv/");

const fileSchema = new mongoose.Schema({
  orignalName: {
    type: String,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", FILE_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

fileSchema.statics.uploadedFile = multer({ storage: storage }).single(
  "csvfile"
);
fileSchema.statics.filePath = FILE_PATH;

const File = mongoose.model("File", fileSchema);
module.exports = File;
