class testresultat extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        
        if(propertyValues.pNr){
            
            this.pNr = propertyValues.pNr;
            this.getName(callback);
            
            this.idTest = propertyValues.id;
            this.getTitle(callback);
            
            var test = new Test(this.idTest, ()=>{
                console.log(test);
            });
            
            //var testQuestions = new QuestionList(this.idTest, ()=>{
           //     console.log(testQuestions);
            //});
            
            
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