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
        var studentTests = new studentTestList();
        studentTests.studentTest(this.pNr, () => {
            var el = '#'+this.pNr;
            $(el).empty();
            studentTests.display(el);
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