class studentprofile extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        console.log('studentprofile propertyValues', propertyValues);
        if(propertyValues.pNr){
          this.readOneByPnrFromDb(propertyValues.pNr, callback);
        }   
    }
    
    readOneByPnrFromDb(pNr, callback){
        this.db.oneByPnr([pNr], (data)=>{
          console.log('data', data);
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