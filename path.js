const fs = require("fs");

const dir = fs.opendirSync("./media/raw");
let dirent;
fileList = [];

while ((dirent = dir.readSync()) !== null) {
  fileList.push(dirent.name);
  console.log(dirent.name);
}

console.log("Finally" + fileList);




dir.closeSync();
