class Question extends Base {

  static defaultPropertyValues(){
    return {
      idQuestion: 0,
      Question_Title: '',
      Question: 0,
      type: '',
      Test_idTest: 0
    }
  }

  constructor(propertyValues, callback){
    super(propertyValues);
      console.log('propertyValues', propertyValues);
    this.option = new QuestionOptionList(propertyValues.idQuestion, callback);  
  }

  load(id, callback){
    this.db.readAll([Test_idTest], (data)=>{
      var row = data[0];
      for(var name in row){
        this[name] = row[name];
      }
      callback && callback(this);
    });
  }

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM question WHERE Test_idTest = ?
      `
    }
  }

}

  
  


