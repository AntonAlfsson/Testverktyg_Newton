class teacher extends Base {
    
    constructor(propertyValues){
        super(propertyValues);
        this.fillStudentList();
    }
    
    
    
    
    fillStudentList(){
        var n;
        $('.student-list').empty();
        this.db.allStudents({
        },(data)=>{
            for(let i = 0; i < data.length; i++){
                if(data[i].roll == 'Student'){ 
                    this.n = data[i].Name;
                    
                    $('.student-list').append('<tr><td><input type="checkbox" name="myTextEditBox" value="checked"/></td><td>' + data[i].pNr + '</td><td>' + this.n.substr(0, this.n.indexOf(' ')) + '</td<td>' + this.n.substr(this.n.indexOf(' '), this.n.length) + '</td><td>johncarter@mail.com</td></tr>');
                 }
            }
            
        });
    }
    
    
    
    static get sqlQueries(){

        return {
          tName: `
            select Name from Person
          `,
        allStudents:`
        select pNr, Name, roll, klass from Person
    `
        }
      }
}