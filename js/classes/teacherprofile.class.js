class teacherprofile extends Base {

    constructor(propertyValues){
        super(propertyValues);
        this.getTName();
    }

    

    //Detta är ett test att sätta en namn
    // Kallar in metoden som sätter namn
    getTName(){

      this.db.tName({
      },(data)=>{
        
        for(var i = 0; i < data.length; i++){

          console.log(data[i].Name);

          $('.teacherName').html(data[i].Name);

        }
      });
      }



      static get sqlQueries(){

        return {
          tName: `
            select Name from Person
          `
        }
      }
    }
