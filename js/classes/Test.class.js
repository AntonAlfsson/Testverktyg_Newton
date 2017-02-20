class Test extends Base {
    
    constructor(){
        super();
        this.getAllByTest();
    }

    static get sqlQueries(){

    return {
      all: `
        select * from Test 
      `,
      byTest: `
        select * from Test
        where Title = ?
      `,
      newTest: `
        INSERT INTO Test SET ?
      `,
      allByTest: `
        select Test, start from Test
        order by start
    `
    }
  }



}