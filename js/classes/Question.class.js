class Question extends Base {
    
      constructor(){
          super();
          this.getAllByTitle();
      }

      getAllByTitle(){ // metod för att hämta Title från tabellen Question
          
          this.db.all({  
          },(data)=>{
            console.log("nu går jag in i metoden getAllByTitle")
              $('.question-head').empty();
              //$('.question-head').html(data.title);
              //$('.question-head').html("Ny text");            
          });
      }
      

      static get sqlQueries(){

      return {
        all: `
          select * from Question 
        `,
        byTitle: `
          select * from Question
          where Title = ?
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