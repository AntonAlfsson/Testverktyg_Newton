class PersonList extends List {

  constructor(items){
    super(Person,items);
  }

  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let Person of this){
      Person.insertInDb(callbackEach);
    }
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM Person
      `
    }
  }

}