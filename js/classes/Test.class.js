class Test extends Base {
    
    static defaultPropertyValues(){
    return {
      id: '1',
      Title: 'Provets namn',
      Start: '',
      Slut: '',
    }
  }

    constructor(propertyValues){
      super(propertyValues)
      console.log(propertyValues);
      this.idTest = propertyValues.idTest;
      this.pNr = propertyValues.Person_pNr;
  }

}