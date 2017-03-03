class TestSida extends Base {

    // PropertyValues in this ex. is an object with one property id.
    //WE get it from route params
    constructor(propertyValues, callback){
        // We call super (the Base class)
        // and it copies the property id to this.id
        super(propertyValues);
        this.getTitle(callback);
        propertyValues.typeTest = 1;
        
        this.questionList = new QuestionList(propertyValues, ()=>{
            this.questionList.display('.questions');
        });
        
        // Just a test - a title for our test
        // get it from the database later???
        // Call QUestionList for an instance
       /* new testQuestionList(propertyValues.id,(q)=>{
          // Questionlist sends an instance of itself
          // we pick it up as "q" in this arrowfunction(Arrowfunction is actually a callback)
          this.questionList = q;
          // And finally we send this instance of "testsida" to the display in app.js
          callback(this);
        } );*/

      }
    
    submit(){
        this.db.testDone([this.id, this.pNr]);
    }
    
    getTitle(callback){
        this.db.getTitle([this.id], (data)=>{
           this.title = data[0].Title;
            callback && callback(this);
        });
    }
    
    
    static get sqlQueries(){
    return {
        getTitle: `
        SELECT Title FROM Test WHERE idTest = ?
        `,
        testDone:`
        UPDATE Person_has_Test SET doneNotDone='2' WHERE Test_idTest=? AND Person_pNr=?
        `
    }
  }


}
