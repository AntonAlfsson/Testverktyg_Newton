class Person extends Base {
    
    constructor(){
        super();
        this.getAllByName();
    }
    
    
    getAllByName(){ // metod för att hämta namn och roll i array i ordnigng lärare - elev 
        
        this.db.allByName({  
        },(data)=>{
            $('.inloggning').empty();
           for(var i = 0; i < data.length; i++){
            if(data[i].roll == 'Student'){
            $('.inloggning').append('<li><a href="#Fragor">' + data[i].roll + ' ' + data[i].Name + '</a></li>'); 
            }else{
               $('.inloggning').append('<li><a href="#testresultat">' + data[i].roll + ' ' + data[i].Name + '</a></li>'); 
            }
           }     
        });
    }
    

    static get sqlQueries(){

    return {
      allByName: `
        select Name, roll from Person
        order by roll
    `
    }
  }
}