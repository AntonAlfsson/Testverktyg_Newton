class Question extends Base {
    
      constructor(){
          super();
          this.getAllByTitle();
      }

      getAllByTitle(){ // metod för att hämta Title från tabellen Question
          
          this.db.byTitle({  
          },(data)=>{
            console.log("nu går jag in i metoden getAllByTitle")
            $('.question-head').html(data[0]);  
            console.log(data[1].title);
              
              
              //$('.question-head').html("Ny text");            
          });

          //start here

       

      }
      

      static get sqlQueries(){

      return {
        all: `
          select * from question 
        `,
        byTitle: `
          select title from question
        `,
        newQuestion: `
          INSERT INTO Question SET ?
        `,
        allByType: `
          select Title, type from Question
          order by type
      `
      }
    }
  }