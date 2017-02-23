class dataGenerator extends Base {

  constructor(callback){
    super();
    this.callback = callback;
    this.generateUsers();
  }
    
    generateUsers(){
        var list = new PersonList();
        
        list.readAllFromDb(()=>{ // läser in personer från db
            console.log('Read from db', list);
            
            var theNavbar = new navbar({
            personList: list
          });

          this.callback(theNavbar);
        });
    }
    
    
    
    
}