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
                });
            });    

          //Skapar lista med studentens besvarade test
          testdonelist.teacherTest(propertyValues.pNr, () => {
                $(function(){                
                    testdonelist.display('.testlist');
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