class TestDone extends Base {
    
    constructor(propertyValues, callback){
      super(propertyValues);
      
            this.pNr = propertyValues.Person_pNr;
            this.testQuestions = new QuestionList(propertyValues, callback);
        
       
  }
    
    getTest(id, callback){
        this.db.getTest([id], (data)=>{
            this.id = data[0].idTest;
            this.Title = data[0].Title;
            this.Start = data[0].start;
            this.Slut = data[0].stop;
            callback && callback(this);
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