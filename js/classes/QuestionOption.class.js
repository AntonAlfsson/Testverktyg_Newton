class QuestionOption extends Base {
    
    constructor(){
        super();
        this.getAllByQuestionOption();
    }

    getAllByQuestionOption(){ // metod för att hämta Options från tabellen Option
          
          this.db.all({  
          },(data)=>{
            console.log("nu går jag in i metoden getAllByQuestionOption")
            //$('#option1').html('Hej hej');  
            $('#option1').html('' + data[0].QuestionOption);  
            console.log(data[0]);
                        
          });

   

      }

    static get sqlQueries(){

    return {
      all: `
        select * from QuestionOption
      `,

      byQuestionOption: `
        select QuestionOption from QuestionOption
      `,
      bytrueFalse: `
        select * from QuestionOption
        where trueFalse = ?
      `,
      newOption: `
        INSERT INTO QuestionOption SET ?
      `
    }
  }
}