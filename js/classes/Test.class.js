class Test extends Base {
    
    constructor(){
        super();
        this.getAllFromTest();
    }

    getAllFromTest(){ // metod för att hämta Title från tabellen Question
          console.log("nu går jag in i metoden getAllFromTest")
      
          this.db.byTitle({  
          },(data)=>{
            $('.test-list').empty();
          for (var i = 0; i<data.length; i++){          
            $('.test-list').prepend('<tr><td>'+ data[i].title + 
              '</td><td>' + data[i].start + '</td><td>' + data[i].stop + 
              '</td><td><button type="button" class="btn btn-xs">Starta test</button></td></tr>');
            
            console.log(data[i].title + data[i].start + data[i].stop);
              }

                         
          });
        }

    static get sqlQueries(){

    return {
      all: `
        select * from test 
      `,
      byTitle: `
        select title, start, stop from test
        order by start
      `,
      newTest: `
        INSERT INTO Test SET ?
      `,
      allByStart: `
        select Test, start from Test
        order by start
    `
    }
  }
}