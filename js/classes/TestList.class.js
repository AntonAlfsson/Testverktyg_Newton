class TestList extends List {

  constructor(propertyValues){
    super(Test, propertyValues);
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