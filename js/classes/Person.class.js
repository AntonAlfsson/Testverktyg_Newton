class Person extends Base {
    
    constructor(){
        super();
    }
    
    
    getAllByName(){ // metod för att hämta namn och roll i array i ordnigng lärare - elev
        this.db.allByName({  
        },(data)=>{
         var personer = [];
           for(var i = 0; i < data.length; i++){
            //   personer[i] = data[i].roll + ' ' + data[i].Name;
               
            $('.inloggning').append('<li><a href="#">' + data[i].roll + ' ' + data[i].Name + '</a></li>');
               
           }
            
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
        select Name, roll from Person
        order by roll
    `
    }
  }
    
    
}