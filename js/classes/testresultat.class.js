class testresultat extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        console.log('hej');
        if(propertyValues.pNr){
            this.pNr = propertyValues.pNr;
            this.testId = propertyValues.id;
            this.getName(callback);
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