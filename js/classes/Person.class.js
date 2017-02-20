class Person extends Base {
    
    constructor(){
        super();
    }
    
    
    getAllByName(){ //
        this.db.allByName({
            
        },(data)=>{
            console.log(data);
        });
    }
    
    
    
    addStudent(pNr, Name, lösen, klass){
        
    // Just an example of how to run a query
    this.db.newPerson({
        pNr: pNr,
        Name: Name,
        roll:'Student',
        lösen: lösen,
        klass: klass
      },(data)=>{
      console.log('Result of the query "newStudent"',data);
    });
  }
    
    addTeacher(pNr, Name, lösen){
    // Just an example of how to run a query
    this.db.newPerson({
        pNr: pNr,
        Name: Name,
        roll:'Lärare',
        lösen: lösen
      },(data)=>{
      console.log('Result of the query "newTeacher"',data);
    });
  }
    

    static get sqlQueries(){

    return {
      all: `
        select * from Person 
      `,
      byName: `
        select * from Person
        where Name = ?
      `,
      newPerson: `
        INSERT INTO Person SET ?
      `,
      allByName: `
        select Name from Person
    `
    }
  }
    
    
}