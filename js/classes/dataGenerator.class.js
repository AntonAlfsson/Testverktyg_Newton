class dataGenerator extends Base {

  constructor(callback){
    super();
    this.callback = callback;
    this.generateUsers();
  }
    
    generateUsers(){
        var list = new PersonList();
        
        list.readAllFromDb(()=>{
            console.log('Read from db', list);
            
            var theteacherprofile = new teacherprofile({
            personList: list
          });

          this.callback(theteacherprofile);
        });
    }
    
    
    
    
}