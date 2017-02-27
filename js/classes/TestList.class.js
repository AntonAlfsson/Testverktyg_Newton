class TestList extends List {

  constructor(items){
    super(Test, items);
    this.readAllFromDb();
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback && callback();
    });
  }

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM Test
      `
    }
  }

}