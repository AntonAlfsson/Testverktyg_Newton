class studentTest extends Base {
    
    static defaultPropertyValues(){
    return {
      id: '1',
      Title: 'Provets namn',
      Start: '',
      Slut: '',
      titleStatus: ''
    }
  }

    constructor(propertyValues){
        super(propertyValues);
        this.id = propertyValues.idTest;
        this.pNr = propertyValues.Person_pNr;
        
        this.done( ()=>{
            
            if(this.doneNotDone == 1){
                this.titleStatus = this.Title + ' - ' + 'Not done';
                console.log(this.titleStatus);
            }
            else{
                this.titleStatus = this.Title + ' - ' + 'Result';
                console.log(this.titleStatus);
            }
        });
  }
    
    done(callback){
       this.db.done([this.id, this.pNr], (data)=>{
           console.log(data);
            this.doneNotDone = data[0].doneNotDone;
            callback && callback(this);
        });
    }
    
    
    static get sqlQueries(){
        return {
            done:`
            SELECT doneNotDone FROM Person_has_Test WHERE Test_idTest=? AND Person_pNr=?
`
    }
  }

}