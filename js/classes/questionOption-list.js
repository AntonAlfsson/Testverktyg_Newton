class QuestionOptionList extends List {

  constructor(propertyValues, callback){
    if(propertyValues.typeTest){
        super(testQuestionOption);
    }else{
        super(QuestionOption);    
    }
    this.questionId = propertyValues;
    this.readQuestionOptions(callback);
  }



  readQuestionOptions(callback){
    this.db.readOptions([this.questionId.idQuestion], (data)=>{
    if(this.questionId.pNr){
        for(let i = 0; i < data.length; i++){
            data[i].pNr = this.questionId.pNr;
        }
    }
      this.push.apply(this,data);
      callback && callback(this);
    });
  }


    

      static get sqlQueries(){
        return {
          readOptions: `
            SELECT * FROM QuestionOption WHERE Question_idQuestion = ?
          `
    }
  }

}