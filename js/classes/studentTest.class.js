class studentTest extends Base {
    
    static defaultPropertyValues(){
    return {
      id: '1',
      Title: 'Provets namn',
      Start: '',
      Slut: '',
    }
  }

    constructor(propertyValues){
        super(propertyValues);
        this.id = propertyValues.idTest;
        this.pNr = propertyValues.Person_pNr;
  }

}