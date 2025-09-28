Module.register("MMM-StyledSlideshow", {

  defaults: {
    imageFolder: "/example_images",
    scrollInterval: 3000,
  },

  start() {
    this.imageFolder = this.config.imageFolder
    this.scrollInterval = this.config.scrollInterval
    this.imagePath = ""

    // set timeout for next random text
    setInterval(() => this.changeImage(), this.scrollInterval)
    this.sendSocketNotification("CYCLE_PATHS", this.imageFolder)
  },

  /**
   * Handle notifications received by the node helper.
   * So we can communicate between the node helper and the module.
   *
   * @param {string} notification - The notification identifier.
   * @param {any} payload - The payload data`returned by the node helper.
   */
  socketNotificationReceived: function (notification, payload) {
    if (notification === "NEXT_PICTURE") {
      this.imagePath = payload
      this.updateDom()
    }
  },

  /**
   * Render the page we're on.
   */
  getDom() {
    const wrapper = document.createElement("div")
    wrapper.innerHTML = `<img src=${this.imagePath}>`

    return wrapper
  },

  changeImage() {
    this.sendSocketNotification("NEXT_IMAGE")
  },

  /**
   * This is the place to receive notifications from other modules or the system.
   *
   * @param {string} notification The notification ID, it is preferred that it prefixes your module name
   * @param {number} payload the payload type.
   */
  notificationReceived(notification, payload) {
    if (notification === "CHANGE_IMAGE") {
      this.sendSocketNotification("NEXT_IMAGE")
      this.updateDom()
    }
  }
})
