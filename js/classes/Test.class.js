class Test extends Base {
    
    constructor(){
        super();
        this.getAllByTitle();
    }

    static get sqlQueries(){

    return {
      all: `
        select * from Test 
      `,
      byTitle: `
        select * from Test
        where Title = ?
      `,
      newTest: `
        INSERT INTO Test SET ?
      `,
      allByStart: `
        select Test, start from Test
        order by start
    `
    }
  }
}