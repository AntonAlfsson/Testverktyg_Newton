class TestSida extends Base {

    // PropertyValues in this ex. is an object with one property id.
    //WE get it from route params
    constructor(propertyValues, callback){
        // We call super (the Base class)
        // and it copies the property id to this.id
        super(propertyValues);
        // Just a test - a title for our test
        // get it from the database later???
        this.title='Fin titel';
        // Call QUestionList for an instance
        new QuestionList(propertyValues,(q)=>{
          // Questionlist sends an instance of itself
          // we pick it up as "q" in this arrowfunction(Arrowfunction is actually a callback)
          this.questionList = q;
          // And finally we send this instance of "testsida" to the display in app.js
          callback(this);
        } );

      }


}
