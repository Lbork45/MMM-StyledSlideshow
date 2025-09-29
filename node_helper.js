const NodeHelper = require("node_helper")
const fs = require("fs")
const path = require("path")
const logStream = fs.createWriteStream("/home/user/slideshow.log", { flags: "a" }); // 'a' = append

console.log = function (message, ...optionalParams) {
  const timestamp = new Date().toISOString();
  const fullMessage = [timestamp, message, ...optionalParams].join(" ") + "\n";
  logStream.write(fullMessage);
};


module.exports = NodeHelper.create({
  imagePaths: [],
  currentIndex: 0,

  start: function () {
    console.log(`Starting node helper: ${this.name}`);
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "NEXT_IMAGE") {
      this.sendSocketNotification("NEXT_PICTURE", this.imagePaths[this.currentIndex]);
      this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
    }
    else if (notification == "CYCLE_PATHS"){
      this.cycleFiles(payload);
    }
  },
  cycleFiles: function(folderPath){
    const modulePath = path.join(__dirname, folderPath);
    fs.readdir(modulePath, (err, files) => {
      if (err) return console.error(err);
      this.imagePaths = files.map(f => folderPath + "/" + f);
    });
  },
})