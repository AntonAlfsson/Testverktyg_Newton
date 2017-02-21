class TestDataGenerator extends Base {

  constructor(){
    super();
    this.dropUsers(()=>{
      this.generateUsers();
    });

  }

  randomItemFromArray(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  randomNum(min,max){
    var diff = max - min;
    return min + Math.round(0.5 + Math.random()*diff);
  }
    
    randomRoll(){
        while(true){
        var i = 1 + Math.round(0.5 + Math.random()*2);
            console.log(i);
        }
        return 'Student';
    }

  dropUsers(callback){
    this.db.dropUsers(callback);
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

    // Create a new list of users
    var list = new userList();
    for(var i = 0; i < howMany; i++){
      list.push({
        pNr: this.randomNum(1920,2010) +
          this.randomNum(1,12) +
          this.randomNum(0,28),   
        Name: this.randomItemFromArray(firstNames) + ' ' + this.randomItemFromArray(lastNames),  
        //roll: this.randomRoll()

      });
    }

    // Write the list to DB
    list.writeToDb(()=>{

      console.log("Written to DB!",list);
      // Now read it back into a list to confirm
      var listFromDb = new PetOwnerList();
      listFromDb.readAllFromDb(()=>{
        console.log("Read from DB",listFromDb);
      });

    });
  }

  static get sqlQueries(){
    return {
      dropUsers: `
        DROP TABLE IF EXISTS Person 
      `
    }
  }


}