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
        $('.teacherName').empty();
        $('.teacherName').html('test');
        for(var i = 0; i < data.length; i++){

          console.log(data[i]);

          $('.teacherName').html('test');

          if(data[i].Name == 'Per Persson'){
            $('.panel-title').append('test');
          }

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
