class DB{
    constructor(){
        this.data;
    }
    setData(value){
        this.data = value
    }
    getData(){
        return this.data;
    }
    getDataDisk(disk){
        return this.data[disk];
    }
}

export default new DB();