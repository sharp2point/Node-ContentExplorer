import template from "./template.js";

export default class OpFile extends HTMLElement {
  constructor(rootPath, fileName, imagePath) {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.innerHTML = template.render();
    this.DOM = template.mapDOM(this.root);
    this.DOM.fileName.innerHTML = fileName;
    this.DOM.fileImage.src = imagePath;

    this.rootPath = rootPath;
    this.name = fileName;
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

if (!customElements.get("op-file")) {
  customElements.define("op-file", OpFile);
}
