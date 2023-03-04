import template from "./template.js";

export default class ContentPanel extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.innerHTML = template.render();
    this.DOM = template.mapDOM(this.root);

    this.undoSubscribers = [];
    this.DOM.navigatorUndo.addEventListener("click", () => {
      this.undoSubscribers.forEach((subs) => {
        subs.fn.call(subs.ctx, { data: "click" });
      });
    });
  }
  addSubscriber(ctx, fn){
    this.undoSubscribers.push({ ctx, fn });
  };
  add(element){
    this.DOM.contentPanel.appendChild(element);
  };
  clear(){
    this.DOM.contentPanel.innerHTML = "";
  }
}
if(!customElements.get("op-content-panel")){
    customElements.define("op-content-panel",ContentPanel);
}
