class TestDone extends Base {
    
    constructor(propertyValues, callback){
      super(propertyValues);
      
        this.pNr = propertyValues.Person_pNr;
        this.testQuestions = new QuestionList(propertyValues, callback);
        
        this.timeConfig();
        
       
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
    
    timeConfig(){
        var t = this.start.replace("T", " ");
        t = t.substring(0, t.length-8);
        this.start = t;
        
        var s = this.stop.replace("T", " ");
        s = s.substring(0, s.length-8);
        this.stop = s;
    }
    
    
    static get sqlQueries(){
        return {
        getTest:`
            SELECT * FROM Test WHERE idTest=?
        `
    }
  }

}