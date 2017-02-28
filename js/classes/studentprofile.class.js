class studentprofile extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);

        this.tests = new TestList();
        
        console.log('studentprofile propertyValues', propertyValues);
        if(propertyValues.pNr){
          this.readOneByPnrFromDb(propertyValues.pNr, callback);   
          this.readThisStudentsTestFromDb(propertyValues.pNr, callback);                
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

    //Metod som hämtar den här studentens test.
    readThisStudentsTestFromDb(pNr, callback){
    	this.db.testsByPnr([pNr], (data)=>{
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
            `,
            testsByPnr:`
                Select * from test
				where idTest = (
				select Test_idTest from Person_has_Test
				where Person_pNr = (
				select pNr from person 
				where pNr = ?));
            `
        }
      }

}