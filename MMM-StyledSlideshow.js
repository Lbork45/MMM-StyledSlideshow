Module.register("MMM-StyledSlideshow", {

  defaults: {
    imageFolder: "example_images",
    scrollInterval: 30000,
    width: 20,
    height: 20
  },

  start() {
    this.imageFolder = this.config.imageFolder
    this.scrollInterval = this.config.scrollInterval
    this.width = this.config.width
    this.height = this.config.height
    this.imagePath = ""
    this.sendSocketNotification("GET_PATHS", this.imageFolder)
    setTimeout(() => this.changeImage(), 3000)
    setInterval(() => this.changeImage(), this.scrollInterval)
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
  const image = document.createElement("img");
  image.style.width = this.width + "%"
  image.style.height = this.height + "%"
  image.src = this.file(this.imagePath);
  image.alt = this.imagePath + " error loading";
  wrapper.appendChild(image);
  return wrapper;
},



  changeImage() {
    this.sendSocketNotification("NEXT_IMAGE")
    console.log("[MMM-StyledSlideshow] - Changing Image")
  },

  /**
   * This is the place to receive notifications from other modules or the system.
   *
   * @param {string} notification The notification ID, it is preferred that it prefixes your module name
   * @param {number} payload the payload type.
   */
  notificationReceived(notification, payload) {
    if (notification === "CHANGE_IMAGE") {
      this.changeImage()
      this.updateDom(15000)
    }
  }
})
