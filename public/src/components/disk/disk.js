import template from "./template.js";
export default class Disk extends HTMLElement{
    constructor(label, imagePath){
        super();
        this.root = this.attachShadow({mode:'open'});
        this.root.innerHTML = template.render();
        this.DOM = template.mapDOM(this.root);
        this.DOM.diskHeader.innerHTML = label;
        this.style.background = `center / cover no-repeat url(${imagePath})`;
    }
}
if(!customElements.get("op-disk")){
    customElements.define("op-disk",Disk);
}