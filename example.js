let youtubeVideoToFrames = require("./index.js");
let youtubeUrl = "https://www.youtube.com/watch?v=jDZhiMMxlgM";

let options = {
  videoName: "video",
  fps: 7,
  imgFileName: "jDZhiMMxlgM",
  downloadLocation: "./test",
};

youtubeVideoToFrames(youtubeUrl, options);
