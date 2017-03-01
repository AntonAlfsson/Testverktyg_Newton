class QuestionOptionList extends List {

  constructor(propertyValues, callback){
    super(QuestionOption); 
      
    this.questionId = propertyValues;
    this.readQuestionOptions(callback);  
  }



  readQuestionOptions(callback){
    this.db.readOptions([this.questionId], (data)=>{
      this.push.apply(this,data);
      callback && callback(this);
    });
  }


    

      static get sqlQueries(){
        return {
          readOptions: `
            SELECT * FROM questionoption WHERE Question_idQuestion = ?
          `
    }
  }

}