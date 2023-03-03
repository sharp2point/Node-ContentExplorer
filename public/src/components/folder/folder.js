import template from "./template.js";

export default class OpFolder extends HTMLElement {
  constructor(folderName, imagePath) {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.innerHTML = template.render();
    this.DOM = template.mapDOM(this.root);
    this.DOM.folderName.innerHTML = folderName;
    this.DOM.folderImage.src = imagePath;

    this.name = folderName;
  }
}

if(!customElements.get("op-folder")){
    customElements.define("op-folder", OpFolder);
}
