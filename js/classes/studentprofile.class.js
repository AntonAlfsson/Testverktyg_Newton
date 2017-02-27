class studentprofile extends Base {
    
    constructor(propertyValues){
        super(propertyValues);
        this.tests = new TestList();
    }
}