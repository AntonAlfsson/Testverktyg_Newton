class Question extends Base {
    
      constructor(){
          super();
          this.getAllByTitle();
      }

      getAllByTitle(){ // metod för att hämta Title från tabellen Question
          console.log("nu går jag in i metoden getAllByTitle")

          this.db.byTitle({  
          },(data)=>{          
            $('.question-head').html('' + data[0].title);  
            console.log(data[1].title);
              

                         
          });

          this.db.byQuestion({
          },(data)=>{
            $('.question').html('' + data[0].question);


          });


       

      }
      

      static get sqlQueries(){

      return {
        all: `
          select * from question 
        `,
        byTitle: `
          select title from question
        `,
        byQuestion: `
          select question from question
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