class Person extends Base {
    
    static defaultPropertyValues(){
    return {
      pNr: '199105231320',
      Name: 'Jon Doe',
      roll: 'Student',
      klass: 'SYSJM2',
      lösen: '1234'
    }
  }
     
    constructor(propertyValues){
        super(propertyValues);
        if(this.Student_id == null){
            this.roll = 'Teacher'
        }else{
            this.roll = 'Student'
        }
    }
    
    insertInDb(callback){
        this.db.newPerson({
        pNr: this.pNr,
        Name: this.Name,
        roll: this.roll,
        lösen: this.lösen,
        klass: this.klass
    },callback);
  }
    
    get name(){
        return this.Name;
    }
    
    getroll(){
        return this.roll;
    }
    
    

    static get sqlQueries(){

    return {
        newPerson: `
        INSERT Person SET ?
`
    }
  }
}