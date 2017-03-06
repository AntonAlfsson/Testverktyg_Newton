class studentprofile extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        
        var notdone = {};
        notdone.type = 'student';

        var done = {};
        done.type = 'testdone';

        var testlist = new TestList(notdone);
        var testdonelist = new TestList(done);

        
        if(propertyValues.pNr){
          //Läser in studentens namn till profilsidan
          this.readOneByPnrFromDb(propertyValues.pNr, callback);
              
              
          //Skapar lista med studentens ej besvarade test   
          testlist.studentTest(propertyValues.pNr, () => {
                $(function(){                
                    testlist.display('.testlist');
                    console.log(testlist);
                });
            });    

          //Skapar lista med studentens besvarade test
          testdonelist.studentTest(propertyValues.pNr, () => {
                $(function(){                
                    testdonelist.display('.testlist');
                    console.log(testdonelist);
                });
            });                         
        }
    }

     readOneByPnrFromDb(pNr, callback){
        this.db.oneByPnr([pNr], (data)=>{
          for(var prop in data[0]){
             var val = data[0][prop];
             this[prop] = val;
          }
          
          callback && callback(this);
        });
    }
    
    static get sqlQueries(){
        return {
            oneByPnr:`
                select * from Person where pNr = ? limit 1
            `
        }
      }

}