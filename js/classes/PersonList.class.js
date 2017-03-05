class PersonList extends List {

  constructor(propertyValues){
      if(propertyValues.type == 'all'){
          super(Person);
      }else{
          super(Student);
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
            teacherStudent:`
            select*from Person inner join Person_has_Person on pNr=Person_pNr1 and Person_pNr=?
`
    }
  }

}