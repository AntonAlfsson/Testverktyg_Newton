class TestDataGenerator extends Base {

  constructor(callback){
    super();
    this.callback = callback;
      this.generateUsers();
  /*  this.dropTables(()=>{
      this.generateUsers();
    });*/
  }
    
randomItemFromArray(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  randomNum(min,max){
    var diff = max - min;
    return min + Math.round(0.5 + Math.random()*(diff+1)) - 1;
  }
    
    randomRoll(){
        var roll = 1 + Math.round(0.5 + Math.random()*(1+1)) - 1;
        
        if(roll == 1){
            return 'Student';
        }else{
            return 'Lärare';
        }
        
    }

  dropTables(callback){
    this.db.dropUsers(()=>{
        
    });
  }

  generateUsers(howMany = 10){

    // Some data to seed from
    var firstNames = [
      'Anna','Bertil','Cecilia','David','Erika','Fredrik',
      'Gabriella', 'Hugo', 'Ingrid', 'Jacob', 'Karolina', 'Leo'
    ];
    var lastNames = [
      'Svensson', 'Karlsson', 'Olsson', 'Bengtsson', 'Davidsson',
      'Efraimsdotter', 'Knutsson', 'Khwaja', 'Malm', 'Frisk'
    ];

    for(var i = 0; i < howMany; i++){
        this.db.addUser({
            pNr: '' + this.randomNum(1920,2010) + 
                this.randomNum(1,12) + 
                this.randomNum(1,28) + 
                this.randomNum(2020,4040),
            Name: this.randomItemFromArray(firstNames) + ' ' + this.randomItemFromArray(lastNames),
            roll: this.randomRoll()
        });
    }

  }



  static get sqlQueries(){
    return {
      dropUsers: `
        DROP TABLE IF EXISTS Person 
      `,
      addUser:`
         INSERT INTO Person (pNr, Name, roll) VALUES ("?", "?", "?")   
    `
  }

}
}