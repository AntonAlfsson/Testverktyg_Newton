class TestList extends List {

  constructor(propertyValues){
      if(propertyValues.type == 'teacher'){
          super(studentTest);
      }else{
          super(Test);
      }
  }


    studentTest(pNr, callback){
        this.db.testsByPnr([pNr], (data)=>{
            this.push.apply(this,data); 
            callback && callback(this);
    });
  }
    
    teacherTest(pNr, callback){
        this.db.teacherTestsByPnr([pNr], (data)=>{
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
      `,
      testsByPnr:`
        SELECT * FROM Test JOIN Person_has_Test ON idTest=Test_idTest WHERE Person_pNr=? AND doneNotDone='1'
        `,
        teacherTestsByPnr:`
        SELECT * FROM Test JOIN Person_has_Test ON idTest=Test_idTest WHERE Person_pNr=? AND doneNotDone='2'
        `
    }
  }

}