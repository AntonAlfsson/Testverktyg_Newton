class QuestionOption extends Base {
    
    constructor(){
        super();
        this.getAllByQuestionOption();
    }

    getAllByQuestionOption(){ // metod för att hämta QuestionOptions från tabellen QuestionOption
          
          this.db.all({  
          },(data)=>{
            $('#option1').html('' + data[0].QuestionOption);
            $('#option2').html('' + data[1].QuestionOption);  
            $('#option3').html('' + data[2].QuestionOption);  
                        
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