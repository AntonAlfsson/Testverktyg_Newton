class studentprofile extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);

        var list = new TestList();

        
        if(propertyValues.pNr){
          //Läser in studentens namn till profilsidan
          this.readOneByPnrFromDb(propertyValues.pNr, callback);
         
          //Skapar lista med studentens test 
          list.studentTest(propertyValues.pNr, () => {
                //$('.stud').empty();
                $(function(){
                    list.display('.testlist');
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