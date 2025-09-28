const NodeHelper = require("node_helper")

module.exports = NodeHelper.create({

  async socketNotificationReceived(notification, payload) {
    if (notification === "CHANGE_IMAGE") {
      this.sendSocketNotification("NEXT_PICTURE")
    }
  },
})
