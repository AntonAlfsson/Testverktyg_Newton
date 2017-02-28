class TestList extends List {

  constructor(items){
    super(Test, items);
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  studentTest(pNr, callback){
        this.db.testsByPnr([pNr], (data)=>{
            this.push.apply(this,data);
            callback && callback(this);
    });
  }

    setPnr(pnr){
        this.pNr=pnr;
    }

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM Test
      `
      ,
      testsByPnr:`
        Select * from test
        where idTest = (
        select Test_idTest from Person_has_Test
        where Person_pNr = (
        select pNr from person 
        where pNr = ?))
            `
    }
  }

}