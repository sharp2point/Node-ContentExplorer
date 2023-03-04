import template from "./template.js";

export default class OpFolder extends HTMLElement {
  constructor(rootPath, folderName, imagePath) {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.innerHTML = template.render();
    this.DOM = template.mapDOM(this.root);
    this.DOM.folderName.innerHTML = folderName;
    this.DOM.folderImage.src = imagePath;

    this.rootPath = rootPath;
    this.name = folderName;
    this.clickSubscribers = [];

    this.addEventListener("click", (e) => {
      this.clickSubscribers.forEach((subs) => {
        subs.fn.call(subs.ctx, this.getFullPath());
      });
    });
  }
  addSubscriber(ctx, fn) {
    this.clickSubscribers.push({ ctx, fn });
  }
  getFullPath() {
    return [this.rootPath, this.name].join("/");
  }
}

if (!customElements.get("op-folder")) {
  customElements.define("op-folder", OpFolder);
}
