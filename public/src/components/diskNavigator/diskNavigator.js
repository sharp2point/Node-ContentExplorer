import template from "./template.js";

export default class DiskNavigator extends HTMLElement{
    constructor(){
        super();
        this.root = this.attachShadow({mode:'open'});
        this.root.innerHTML = template.render();
        this.diskList = [];
        
    }
    add(disk){
        this.diskList.push(disk)
        this.root.appendChild(disk);
    }
    clear(){
        this.diskList.forEach(disk=>this.root.removeChild(disk));
        this.diskList = [];
    }
}

if(!customElements.get("op-disk-navigator")){
    customElements.define("op-disk-navigator",DiskNavigator);
}