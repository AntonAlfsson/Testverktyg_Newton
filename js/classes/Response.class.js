class Response extends Base {
    
    constructor(){
        super();
        this.getAllByResponse();
    }

    static get sqlQueries(){

    return {
      all: `
        select * from Response 
      `,
      byPerson_pNr: `
        select * from Response
        where Person_pNr = ?
      `,
      newResponse: `
        INSERT INTO Response SET ?
      `
    }
  }
}