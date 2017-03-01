class studentTestList extends List {

  constructor(items){
    super(studentTest, items);
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
        select * from Test
join Person_has_Test on idTest=Test_idTest
join Person on Person_pNr=pNr
where pNr=?            `
    }
  }

}