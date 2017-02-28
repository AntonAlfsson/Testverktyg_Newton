class teacherprofile extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        
        var list = new studentList();
        
        console.log('teacherprofile propertyValues', propertyValues);
        
        if(propertyValues.pNr){
            list.teacherStudent(propertyValues.pNr, () => {
                //$('.stud').empty();
                $(function(){
                    list.display('.stud');
                });
            });
           
          this.readOneByPnrFromDb(propertyValues.pNr, callback);
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