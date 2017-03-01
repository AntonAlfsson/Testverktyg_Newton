class Fragor extends Base {

	constructor(propertyValues, callback){
		super(propertyValues);

		//this.idTest = propertyValues.idTest;
		console.log(propertyValues.idTest);

		var test = new Test(propertyValues.idTest, ()=> {
			console.log(test);
		});

	

		

		

	}





}


