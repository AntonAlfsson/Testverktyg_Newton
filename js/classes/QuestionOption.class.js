class QuestionOption extends Base {
    
    constructor(){
        super();
        this.getAllByOption();
    }

    getAllByOption(){ // metod för att hämta Title från tabellen Question
          
          this.db.all({  
          },(data)=>{
            console.log("nu går jag in i metoden getAllByOption")
            $('#option1').html(data[0]);  
            console.log(data[1].options);
              
              
              //$('.question-head').html("Ny text");            
          });

    static get sqlQueries(){

    return {
      all: `
        select * from Option 
      `,
      bytrueFalse: `
        select * from Option
        where trueFalse = ?
      `,
      newOption: `
        INSERT INTO Option SET ?
      `,
      allByQuestion_idQuestion: `
        select Options, trueFalse from Option
        order by Question_idQuestion
    `
    }
  }
}