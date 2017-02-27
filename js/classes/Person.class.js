class Person extends Base {
    
    static defaultPropertyValues(){
    return {
      pNr: '199105231320',
      Name: 'Jon Doe',
    }
  }
     
    constructor(propertyValues){
        super(propertyValues);
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
    
    static get sqlQueries(){

    return {
        newPerson: `
        INSERT Person SET ?
`
    }
  }
}