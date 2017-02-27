class Question extends Base {
    
      constructor(){
          super();
          this.getAllByTitle();
          this.next(); 
          
        }

        next() {
          
          var counter = 0; 
          var anothercounter =0; 
            
          this.db.byTitle({  
          },(data)=>{     
            //console.log(data[].title);     
            
          $('#nextbutton').click(function() {
                      
            counter = (counter + 1)%data.length;
            console.log(data[counter].title);
            $('.question-head').html(''+data[counter].title);  
              
                                  
          });

        });  

          this.db.byQuestion({  
          },(data)=>{     
            //console.log(data[].title);     
            
          $('#nextbutton').click(function() {
                      
            console.log(data[counter].question);
            $('.question').html('' + data[counter].question);  
              
                                  
          });

        });


           this.db.alla({  
          },(data)=>{     
            //console.log(data[].title);     
            
          $('#nextbutton').click(function() {
             
             anothercounter = (anothercounter+3)%data.length;         
            $('#option1').html('' + data[anothercounter].QuestionOption);
            $('#option2').html('' + data[anothercounter+1].QuestionOption);  
            $('#option3').html('' + data[anothercounter+2].QuestionOption); 
              
                                  
          });

        });





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

          this.db.alla({  
          },(data)=>{
            $('#option1').html('' + data[0].QuestionOption);
            $('#option2').html('' + data[1].QuestionOption);  
            $('#option3').html('' + data[2].QuestionOption);  
                        
          });


       

      }



      static get sqlQueries(){

      return {
        all: `
          select * from question 
        `,
         alla: `
        select * from QuestionOption
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

  
  


