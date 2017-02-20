class Respons extends Base {
    
    constructor(){
        super();
        this.getAllByRespons();
    }

    static get sqlQueries(){

    return {
      all: `
        select * from Respons 
      `,
      byPerson_pNr: `
        select * from Respons
        where Person_pNr = ?
      `,
      newRespons: `
        INSERT INTO Respons SET ?
      `
    }
  }
}