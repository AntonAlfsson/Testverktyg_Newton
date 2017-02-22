class teacherprofile extends Base {

  defaultPropertyValues(){
    return {
      personList: new PersonList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }
    }
