class QuestionList extends List {

  constructor(propertyValues, callback){
    super(Question);
      
    this.testId = propertyValues;
    this.testQuestions(callback);  
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  testQuestions(callback){
    this.db.questionsByIdTest([this.testId], (data)=>{
        this.push.apply(this,data);
        callback && callback(this);
    });
  }


  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM Question
      `
      ,
      questionsByIdTest:`
        select * from Question
        join Test on idTest=Test_idTest
        where idTest = ?
        `
    }
  }

}