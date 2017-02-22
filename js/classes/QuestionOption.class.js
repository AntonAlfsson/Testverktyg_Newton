class QuestionOption extends Base {
    
    constructor(){
        super();
        this.getAllByOption();
    }

    getAllByOption(){ // metod för att hämta Options från tabellen Option
          
          this.db.byOptions({  
          },(data)=>{
            console.log("nu går jag in i metoden getAllByOption")
            $('#option1').html('' + data[0].options);  
            //console.log(data[0].options);
                        
          });

   

      }

    static get sqlQueries(){

    return {
      all: `
        select * from Option 
      `,

      byOptions: `
        select options from option 
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