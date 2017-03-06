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
        var propertyValues = {};
        propertyValues.type = 'teacher';
        var studentTests = new TestList(propertyValues);
        studentTests.teacherTest(this.pNr, () => {
            studentTests.studentTest(this.pNr, ()=>{
                var el = '#'+this.pNr;
                $('.studBud').empty();
                studentTests.display(el);
                
            });
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