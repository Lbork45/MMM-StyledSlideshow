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
    fs.readdir(folderPath, (err, files) => {
      if (err){
        console.error("Error reading folder");
        return;
      }
      const fileList = files.filter(file => fs.statSync(path.join(folderPath, file)).isFile());
      fileList.forEach((filename, index) => {
        const fullPath = path.resolve(folderPath, filename);
        console.log(`[${this.name}] fullPath:`, fullPath);
        this.imagePaths.push(fullPath)
      })
    })
  },
})