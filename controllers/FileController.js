const File = require("../models/file.js");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

class FileController {
  new(request, response) {
    return response.render("newFile");
  }

  async uploadFile(request, response) {
    File.uploadedFile(request, response, async function (error) {
      if (error) {
        console.log("Error" + error);
        return;
      }
      console.log(request.file);
      const file = await File.create({
        orignalName: request.file.originalname,
        name: request.file.filename,
        url: request.file.path,
      });
    });
    return response.redirect("/file/");
  }

  async allFiles(request, response) {
    try {
      const files = await File.find({});
      console.log(files);
      return response.render("allFiles", {
        files: files,
      });
    } catch (error) {
      console.log("error");
    }
  }

  async displayFile(request, response) {
    try {
      const csv = require("csv-parser");
      const fs = require("fs");
      const rows = [];
      fs.createReadStream(
        path.join(__dirname, "..", "/uploads/csv/" + request.query.name)
      )
        .pipe(csv())
        .on("data", (row) => {
          rows.push(row);
        })
        .on("end", () => {
          console.log("CSV file successfully processed");
          console.log(rows);
          return response.render("displayFile", {
            rows: rows,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FileController;
