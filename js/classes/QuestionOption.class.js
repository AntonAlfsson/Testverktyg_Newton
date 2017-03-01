class QuestionOption extends Base {
     
    constructor(propertyValues){
        super(propertyValues);
    }
    
  
    static get sqlQueries(){

    return {
        newPerson: `
        INSERT Person SET ?
`
    }
  }
}