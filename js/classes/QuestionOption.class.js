class QuestionOption extends Base {
     
    constructor(propertyValues, callback){
        super(propertyValues);
        this.data = propertyValues;
        
        
        
        if(this.data.pNr){
            
            this.getPersonResponse( ()=>{
                
                if(this.response != undefined){
                    
                    if(this.response === this.data.QuestionOption && this.data.trueFalse == 2){
                        $('#'+this.data.Question_idQuestion+this.data.idQuestionOption).append(' <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
                    }else if(this.response === this.data.QuestionOption && this.data.trueFalse == 1){
                        $('#'+this.data.Question_idQuestion+this.data.idQuestionOption).append(' <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
                    }else if(this.data.trueFalse == 2){
                         $('#'+this.data.Question_idQuestion+this.data.idQuestionOption).append(' <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
                    }
                }
            });
        }
        
        
        if(this.data.trueFalse == 2){
            $('#'+this.data.Question_idQuestion+this.data.idQuestionOption).append(' <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        }
    }
    
    getPersonResponse(callback){
        this.db.getResponse([this.data.Question_idQuestion, this.data.pNr], (data)=>{
            if(data[0]){
                this.response = data[0].response;
            }
            callback && callback(this);
        });
    }
    
    
    
    
    
        static get sqlQueries(){
        return {
          getResponse: `
            SELECT response FROM Response WHERE Question_idQuestion = ? and Person_pNr = ?
          `
    }
  }
}