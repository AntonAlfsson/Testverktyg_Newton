class Student extends Base {
    
    static defaultPropertyValues(){
    return {
      pNr: '199105231320',
      Name: 'Jon Doe',
    }
  }
     
    constructor(propertyValues){
        super(propertyValues);
        this.getTestList();
    }
    
    getTestList(){
        var studentTests = new TestList();
        
        studentTests.studentTest(this.pNr, () => {
                    console.log('hej', studentTests);
            });
    }
    
    static get sqlQueries(){

    return {
        newPerson: `
        INSERT Person SET ?
`
    }
  }
}