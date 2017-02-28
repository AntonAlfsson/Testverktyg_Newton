class Student extends Base {
    
    static defaultPropertyValues(){
    return {
      pNr: '199105231320',
      Name: 'Jon Doe',
    }
  }
     
    constructor(propertyValues){
        super(propertyValues);
    }
    
    getTestList(){
        var studentTests = new TestList();
    }
    
    static get sqlQueries(){

    return {
        newPerson: `
        INSERT Person SET ?
`
    }
  }
}