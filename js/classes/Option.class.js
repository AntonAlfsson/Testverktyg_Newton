class Option extends Base {
    
    constructor(){
        super();
        this.getAllByOptions();
    }

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