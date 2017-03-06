class TestSida extends Base {

    // PropertyValues in this ex. is an object with one property id.
    //WE get it from route params
    constructor(propertyValues, callback){
        // We call super (the Base class)
        // and it copies the property id to this.id
        super(propertyValues);
        this.timer();
        
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
    
    
    timer(){
        
        this.getStopDate( ()=>{
            
        var countDownDate = this.counter;
            
        // Update the count down every 1 second 
        var x = setInterval(function() { 
            if(!$('#demo').length){
                clearInterval(x);
                return;
            }
            // Get todays date and time 
            var now = new Date().getTime(); 

            // Find the distance between now an the count down date 
            var distance = countDownDate - now; 

            // Time calculations for days, hours, minutes and seconds 
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
            var seconds = Math.floor((distance % (1000 * 60)) / 1000); 

            // Display the result in the element with id="demo" 
            this.tid = days + "d " + hours + "h " 
            + minutes + "m " + seconds + "s "; 

            $('#demo').html(this.tid);    

            // If the count down is finished, write some text 
            if (distance < 0) { 
            clearInterval(x); 
            this.tid = "Tiden är slut!"; 
                $('#demo').html(this.tid);
                $('#submit').trigger('click');
            } 
        }, 1000);  
        });
    }
    
    getStopDate(callback){
        this.db.getStopDate([this.id], (data)=>{
            console.log(data);
            var c = data[0].stop;
            var ce = c.substring(0, c.indexOf('T')) + c.substring(c.indexOf('T'), c.indexOf('Z') - 4);
            c = ce.replace("T", " ");  
            var t = c.split(/[- :]/);  
            this.counter = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5])).getTime();
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
        `,
        getStopDate:`
        SELECT stop FROM Test WHERE idTest=?
        `,
        getStartDate:`
        SELECT start FROM Test WHERE idTest=?
        `
    }
  }


}
