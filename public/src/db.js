class DB {
  constructor() {
    this.data;
    this.cursor = []; /* хранение положения навигации */
  }
  setData(value) {
    this.data = value;
  }
  setDataPath(path,data){

  }
  getData() {
    return this.data;
  }
  getDataDisk(disk) {
    const path = this.data[disk]
    this.setCursor() // обнуление курсораS
    this.setCursor(disk)
    return path;
  }
  getCursor(){
    return this.cursor;
  }
  setCursor(path){
    if(path){
      this.cursor.push(path);
    }else{
      this.cursor = [];
    }    
  }
  popCursor(){
    this.cursor.pop();
    return this.cursor[this.cursor.length-1];
  }
}

export default new DB();
