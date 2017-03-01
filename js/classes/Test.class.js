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
        this.id = propertyValues.idTest;
        this.getTest( ()=>{
            this.testQuestions = new QuestionList(this.id, callback);
        });  
      
  }
    
    getTest(callback){
        this.db.getTest([this.id], (data)=>{
            this.id = data[0].idTest;
            this.Title = data[0].Title;
            this.Start = data[0].start;
            this.Slut = data[0].stop;
            callback && callback(this);
        });
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