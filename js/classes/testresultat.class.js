class testresultat extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        
        if(propertyValues.pNr){
            
            this.pNr = propertyValues.pNr;
            this.getName(callback);
            
            this.idTest = propertyValues.id;
            this.getTitle(callback);
            
            this.test = new Test(this.idTest, ()=>{
                this.questlist = new QuestionList(this.idTest, ()=>{
                    this.questlist.display('.quest');
                });
            });     
        }
    }
    
    
    getName(callback){
        this.db.getPerson([this.pNr], (data)=>{
            this.Name = data[0].Name;
            callback && callback(this);
    });
  }
    
    getTitle(callback){
        this.db.getTitle([this.idTest], (data)=>{
           this.title = data[0].Title;
            callback && callback(this);
        });
    }
    
    
    
    static get sqlQueries(){

    return {
        getPerson: `
        SELECT Name FROM Person WHERE pNr = ?
        `,
        getTitle: `
        SELECT Title FROM Test WHERE idTest = ?
        `
    }
  }
    
}