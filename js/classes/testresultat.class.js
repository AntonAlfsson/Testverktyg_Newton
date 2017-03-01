class testresultat extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        
        if(propertyValues.pNr){
            
            this.Person_pNr = propertyValues.pNr;
            this.getName(callback);
            
            if(propertyValues.id){
                this.idTest = propertyValues.id;
                var selectedTest = new Test(this.idTest, this.Person_pNr);
                
                selectedTest.getTest( ()=>{
                    console.log('selectedTest', selectedTest);
                });
            }
        }
    }
    
    
    getName(callback){
        this.db.getPerson([this.pNr], (data)=>{
            this.Name = data[0].Name;
            callback && callback(this);
    });
  }
    
    
    
    static get sqlQueries(){

    return {
        getPerson: `
        SELECT Name FROM Person WHERE pNr = ?
        `
    }
  }
    
}