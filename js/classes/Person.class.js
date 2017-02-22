class Person extends Base {
    
    static defaultPropertyValues(){
    return {
      pNr: '199105231320',
      Name: 'Jon Doe',
      roll: 'Student',
      klass: 'SYSJM2',
      lösen: '1234'
    }
  }
     
    constructor(propertyValues){
        super(propertyValues);
        this.getAllByName();
        this.fillStudentList();
    }
    
    
    getAllByName(){ // metod för att hämta namn och roll i array i ordnigng lärare - elev 
        
        this.db.allByName({  
        },(data)=>{
            $('.inloggning').empty();
           for(var i = 0; i < data.length; i++){
            if(data[i].roll == 'Student'){
            $('.inloggning').append('<li><a href="/Fragor">' + data[i].roll + ' ' + data[i].Name + '</a></li>'); 
            }else{
               $('.inloggning').append('<li><a href="/teacherprofile">' + data[i].roll + ' ' + data[i].Name + '</a></li>'); 
            }
           }     
        });
    }
    
    fillStudentList(){
        console.log('hej');
        var n;
        $('.student-list').empty();
        this.db.allStudents({
        },(data)=>{
            for(let i = 0; i < data.length; i++){
                if(data[i].roll == 'Student'){ 
                    this.n = data[i].Name;
                    
                    $('.student-list').append('<tr><td><input type="radio" name="myTextEditBox"></td><td>' + data[i].pNr + '</td><td>' + this.n.substr(0, this.n.indexOf(' ')) + '</td><td>' + this.n.substr(this.n.indexOf(' '), this.n.length) + '</td><td>default@mail.com</td></tr>');
                 }
            }
            
        });
    }
    
    insertInDb(callback){
        this.db.newPerson({
        pNr: this.pNr,
        Name: this.Name,
        roll: this.roll,
        lösen: this.lösen,
        klass: this.klass
    },callback);
  }
    
    get name(){
        return this.Name;
    }
    
    

    static get sqlQueries(){

    return {
      allByName: `
        select Name, roll from Person
        order by roll
    `,
        allStudents:`
        select pNr, Name, roll, klass from Person
    `,
        newPerson: `
        INSERT Person SET ?
`
    }
  }
}