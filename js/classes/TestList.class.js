class TestList extends List {

  constructor(propertyValues){
    //Om det som skickas in är av typen teacher, skapa objekt av typen studentTest
      if(propertyValues.type == 'teacher'){
          super(studentTest);
      }     
      //Om det som skickas in är av typen testdone, skapa objekt av typen testdone
      else if(propertyValues.type == 'testdone'){
        super(TestDone);
      }
      //Annars, skapa objekt av typen test
      else{
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
      //Söker test baserat på om studenten har svarat på testet eller inte (1 = ej besvarat 2 = besvarat)
      testsByPnr:`
        SELECT * FROM Test JOIN Person_has_Test ON idTest=Test_idTest WHERE Person_pNr=? AND doneNotDone='1'
        `,
        teacherTestsByPnr:`
        SELECT * FROM Test JOIN Person_has_Test ON idTest=Test_idTest WHERE Person_pNr=? AND doneNotDone='2'
        `
    }
  }

}