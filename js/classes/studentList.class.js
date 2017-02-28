class studentList extends List {

  constructor(items){
    super(Student,items); 
  }

  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let Student of this){
      Student.insertInDb(callbackEach);
    }
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }
    teacherStudent(pNr, callback){
        this.db.teacherStudent([pNr], (data)=>{
            this.push.apply(this,data);
            callback && callback(this);
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
    `,
            teacherStudent:`
            select*from Person inner join Person_has_Person on pNr=Person_pNr1 and Person_pNr=?
`
    }
  }

}