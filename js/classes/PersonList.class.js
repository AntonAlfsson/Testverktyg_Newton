class PersonList extends List {

  constructor(items){
    super(Person,items); 
  }

  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let Person of this){
      Person.insertInDb(callbackEach);
    }
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }
    readAllStudentsFromDb(callback){
        this.db.readAllStudentsFromDb((data)=>{
            this.push.apply(this,data);
      callback();
    });
  }
    
    setPnr(pnr){
        this.pNr=pnr;
    }

    

  static get sqlQueries(){
    return {
    allStudents:`
        select pNr, Name, roll, klass from Person
    `,
    allByName: `
        select Name, roll from Person
        order by roll
    `,
      readAll: `
        SELECT * FROM Person
      `,
        readAllStudentsFromDb: `
        SELECT*FROM Person JOIN Student ON pNr=Person_pNr JOIN Teacher_has_Student ON Person_pNr=Student_Person_pNr AND Teacher_Person_pNr='${this.pNr}'
`
    }
  }

}