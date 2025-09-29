Module.register("MMM-StyledSlideshow", {

  defaults: {
    imageFolder: "/home/user/MagicMirror/modules/MMM-StyledSlideshow/example_images",
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
  const wrapper = document.createElement("div");
  if (!this.imagePath) {
    wrapper.innerHTML = "<div>No image yet</div>";
  } else {
    // this.file() will output:
    // /modules/MMM-StyledSlideshow/example_images/photo.jpg
    const url = this.file(this.imagePath);
    wrapper.innerHTML = 
      `<img src="${url}" style="max-width:100%; height:auto;" alt="slide">`;
  }
  return wrapper;
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
