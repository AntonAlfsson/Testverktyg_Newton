class testQuestionOption extends Base {
     
    constructor(propertyValues, callback){
        super(propertyValues);
        this.props = propertyValues;
        
        this.getPersonResponse( ()=>{
                
                if(this.response != undefined){
                    
                    if(this.response === this.QuestionOption){
                        $('#'+this.props.Question_idQuestion+this.props.idQuestionOption).append(' <span class="glyphicon glyphicon-hand-left" aria-hidden="true"></span>');
                    }
                }
            });
    }
    
    setResponse(){
        $('.'+this.Question_idQuestion).find('span').remove();
        $('#'+this.props.Question_idQuestion+this.props.idQuestionOption).append(' <span class="glyphicon glyphicon-hand-left" aria-hidden="true"></span>');
        
        this.db.getResponse([this.props.pNr, this.props.Question_idQuestion], (data)=>{
            if(data[0] == undefined){
                this.db.setResponse([this.props.QuestionOption, this.props.pNr, this.props.Question_idQuestion]);
            }else{
                this.db.updateResponse([this.props.QuestionOption, this.props.Question_idQuestion, this.props.pNr]);
            } 
        });
    }
    
        getPersonResponse(callback){
        this.db.getResponse([this.props.pNr, this.props.Question_idQuestion], (data)=>{
            if(data[0]){
                this.response = data[0].response;
            }
            callback && callback(this);
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