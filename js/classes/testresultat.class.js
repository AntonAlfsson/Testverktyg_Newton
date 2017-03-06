class testresultat extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        
        if(propertyValues.pNr){
            
            this.pNr = propertyValues.pNr;
            this.getName(callback);
            
            this.score = 0;
            
            this.idTest = propertyValues.id;
            this.getTitle(callback);
            
            this.test = new Test(propertyValues, ()=>{
                this.questlist = this.test.testQuestions;
                this.questlist.display('.quest'); 
                
                this.getNumberOfQuestions( ()=>{
                for(let i = 0; i < this.numberOfQuestions; i++){
                    
                    this.getRightAnswer(this.test.testQuestions[i].idQuestion, ()=>{});
                    
                    this.getResponse(this.test.testQuestions[i].idQuestion, ()=>{
                           if(this.an === this.re){
                               this.score += 1;
                            }
                        
                            if(i == this.numberOfQuestions-1){
                                var s = this.score/this.numberOfQuestions;
                                s *= 100;
                                if(s >= 90){
                                    this.el = 'Resultat MVG - ' + this.score + '/' + this.numberOfQuestions;
                                }else if(s >= 75){
                                    this.el = 'Resultat VG - ' + this.score + '/' + this.numberOfQuestions;
                                }else if(s >= 60){
                                    this.el = 'Resultat G - ' + this.score + '/' + this.numberOfQuestions;
                                }else{
                                    this.el = 'Resultat IG - ' + this.score + '/' + this.numberOfQuestions;
                                }
                                
                                $('.result').append(this.el);
                            }
                    });
                }
            });
        }); 
        }
    }
    
    getNumberOfQuestions(callback){ // hämtar antalet frågor i provet
        this.db.getNumberOfQuestions([this.idTest], (data)=>{
           this.numberOfQuestions = data[0].number; 
            callback && callback(this);
        });
    }
    
    
    getName(callback){
        this.db.getPerson([this.pNr], (data)=>{
            this.Name = data[0].Name;
            callback && callback(this);
    });
  }
    
    getTitle(callback){
        this.db.getTitle([this.idTest], (data)=>{
           this.title = data[0].Title;
            callback && callback(this);
        });
    }
    
    getRightAnswer(id, callback){
        this.db.getRightAnswer([id], (data)=>{
            this.an = data[0].QuestionOption;
            callback && callback(this);
        });
    }
    
    getResponse(id, callback){
        this.db.getResponse([id, this.pNr], (data)=>{
            if(!data[0]){
                this.re = 'undefined';
            }else{
                this.re = data[0].response;  
            }
            callback && callback(this);
        });
    }
    
    
    
    static get sqlQueries(){

    return {
        getPerson: `
        SELECT Name FROM Person WHERE pNr = ?
        `,
        getTitle: `
        SELECT Title FROM Test WHERE idTest = ?
        `,
        getNumberOfQuestions: `
        SELECT COUNT(Test_idTest) AS number FROM testverktyg.Question
        WHERE Test_idTest = ?
        `,
        getRightAnswer: `
        Select QuestionOption from QuestionOption
        where Question_idQuestion = ?
        and trueFalse = '2'
        `,
        getResponse: `
        SELECT response FROM Response
        where Question_idQuestion = ?
        and Person_pNr=?
        `
    }
  }
    
}