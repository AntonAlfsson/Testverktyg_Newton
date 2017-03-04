class testQuestionOption extends Base {
     
    constructor(propertyValues, callback){
        super(propertyValues);
        this.props = propertyValues;
    }
    
    setResponse(){
        this.db.getResponse([this.props.pNr, this.props.Question_idQuestion], (data)=>{
            if(data[0] == undefined){
                this.db.setResponse([this.props.QuestionOption, this.props.pNr, this.props.Question_idQuestion]);
            }else{
                this.db.updateResponse([this.props.QuestionOption, this.props.Question_idQuestion, this.props.pNr]);
            } 
        });
    }
    
        static get sqlQueries(){
        return {
          getResponse: `
            SELECT response FROM Response where Person_pNr=? and Question_idQuestion=?
          `,
          setResponse: `
          INSERT INTO Response (response, Person_pNr, Question_idQuestion) VALUES (?, ?, ?);
          `,
          updateResponse: `
          UPDATE Response SET response=? WHERE Question_idQuestion=? AND Person_pNr=?
          `
    }
  }
}