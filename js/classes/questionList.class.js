class QuestionList extends List {

  constructor(propertyValues, callback){
    super(Question);
    this.Question(propertyValues.Test_idTest, callback);

  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  testQuestions(Test_idTest, callback){
        this.db.questionsByIdTest([Test_idTest], (data)=>{
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
        where idTest=?            `
    }
  }

}