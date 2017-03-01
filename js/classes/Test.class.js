class Test extends Base {
    
    static defaultPropertyValues(){
    return {
      id: '1',
      Title: 'Provets namn',
      Start: '',
      Slut: '',
    }
  }
    
    constructor(propertyValues, callback){
      super(propertyValues);
    
        if(propertyValues.idTest){
            this.testQuestions = new QuestionList(this.id, callback);
        }else{
            this.getTest(propertyValues, ()=>{
                this.testQuestions = new QuestionList(this.id, callback);
            });
        }
       
  }
    
    getTest(id, callback){
        this.db.getTest([id], (data)=>{
            console.log('data', this.id);
            this.id = data[0].idTest;
            this.Title = data[0].Title;
            this.Start = data[0].start;
            this.Slut = data[0].stop;
            callback && callback(this);
        });
    }  
    
    getQuestionList(){
        return this.testQuestions;
    }
    
    getQuestions(callback){
        this.questions = new QuestionList(this.id, ()=>{
            questions.testQuestions( ()=>{
                console.log(questions); 
            });
        });
    }
    
    
    
    static get sqlQueries(){
        return {
        getTest:`
            SELECT * FROM Test WHERE idTest=?
        `
    }
  }

}