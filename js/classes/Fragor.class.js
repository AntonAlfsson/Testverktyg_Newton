class Fragor extends Base {

	constructor(propertyValues, callback){
		super(propertyValues);

		var list = new QuestionList();

		console.log('Fragor propertyValues', propertyValues);

		if(propertyValues.Test_idTest){
			//Läser in testets title
			this.readOneByidTestFromDb(propertyValues.idTest, callback);

			//Skapar lista med testets options
			list.QuestionOption(propertyValues.Test_idTest, () => {
                //$('.stud').empty();
                $(function(){
                    list.display('.questionoption');
                    console.log(list);
                });
            });    

		}

	}

	readOneByidTestFromDb(idTest, callback){
		this.db.oneByidTest([idTest], (data)=>{
          for(var prop in data[0]){
             var val = data[0][prop];
             this[prop] = val;
          }
          
          callback && callback(this);
        });

	}

static get sqlQueries(){
	return {
		oneByidTest:`
			select Title from Test
			where idTest = ? limit 1
	`
	}

}


}


