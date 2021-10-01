const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const file = argv.file;
const encoding = "utf8";
const filePath = path.join(__dirname, "..", "storage");
//
if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, { mode: "0755" });
}

if (file) {
  if (file && fs.existsSync(file)) {
    const fileContent = fs.readFileSync(file, {
      encoding,
      flag: "r",
    });
    const data = fileContent
      .toString()
      .trim()
      .split("\n")
      .map((value) => {
        return { type: "sendMessage", label: value, value };
      });

    const fileName = `${uuidv4()}ca_buttons.json`;
    fs.writeFileSync(
      path.join(__dirname, "..", "storage", fileName),
      JSON.stringify(data),
      {
        encoding: "utf8",
        flag: "w",
      }
    );
    console.log("File generated successfully!");
  } else {
    console.log("File does not exist!");
  }
} else {
  console.log("File argument was not entered!");
}

process.exit(0);
