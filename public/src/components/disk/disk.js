import template from "./template.js";
export default class Disk extends HTMLElement{
    constructor(label, imagePath){
        super();
        this.root = this.attachShadow({mode:'open'});
        this.root.innerHTML = template.render();
        this.DOM = template.mapDOM(this.root);
        this.DOM.diskHeader.innerHTML = label;
        this.style.background = `center / cover no-repeat url(${imagePath})`;

        this.label = label;
        this.clickSubscriber = []

        this.addEventListener('click',(e)=>{
            e.stopPropagation();
            this.clickSubscriber.forEach(subs=>{
                subs.fn.call(subs.ctx,this.label);
            })
        })
    }
    addSubscriber(ctx, fn){
        this.clickSubscriber.push({ctx,fn});
    }
}
if(!customElements.get("op-disk")){
    customElements.define("op-disk",Disk);
}