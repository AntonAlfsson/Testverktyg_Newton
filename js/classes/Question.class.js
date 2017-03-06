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
      
    if(!Question.nr){
        Question.nr = 1000000;
        this.nr = Question.nr;
    }else{
        Question.nr++;
        this.nr = Question.nr;
    }
      
    var options = new QuestionOptionList(propertyValues, ()=>{
        options.display('#'+this.nr);
    });
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

  
  


