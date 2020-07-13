const extractFrames = require("ffmpeg-extract-frames");
var fs = require("fs");

// Search all files in 'Raw' Directory 

const dir = fs.opendirSync("./media/raw");
let dirent;
fileList = [];

while ((dirent = dir.readSync()) !== null) {
    // Push file Name to Array
  fileList.push(dirent.name);
}

dir.closeSync();

var numberOfFiles = fileList.length;
console.log("All Files (Total: " + numberOfFiles + "): " + fileList);

for (var i = 0; i < numberOfFiles; i++) {

    if (!fs.existsSync("media/frames/" + fileList[i])) {
      fs.mkdirSync("media/frames/" + fileList[i]);
    }

    const nameOfFile = fileList[i];
    const iteration = i + 1;
    const CompletedFrames = [];

    async function asyncCall() {
        await extractFrames({
          input: "media/raw/" + fileList[i],
          output: "./media/frames/" + fileList[i] + "/frame-%d.png",
          fps: 6,
        });

        CompletedFrames.push("nameOfFile");
        console.log(
          "Finished (" + iteration  + "/" + numberOfFiles + "): " + nameOfFile
        );
    };

    asyncCall();
}