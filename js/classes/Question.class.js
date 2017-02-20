class Question extends Base {
    
    constructor(){
        super();
        this.getAllByType();
    }

    static get sqlQueries(){

    return {
      all: `
        select * from Question 
      `,
      byTitle: `
        select * from Question
        where Title = ?
      `,
      newQuestion: `
        INSERT INTO Question SET ?
      `,
      allByType: `
        select Title, type from Question
        order by type
    `
    }
  }
}