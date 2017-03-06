class studentprofile extends Base {

    constructor(propertyValues, callback){
        super(propertyValues);

        var notdone = {};
        notdone.type = 'student';

        var done = {};
        done.type = 'testdone';

        var testlist = new TestList(notdone);
        var testdonelist = new TestList(done);


        if(propertyValues.pNr){
          //Läser in studentens namn till profilsidan
          this.readOneByPnrFromDb(propertyValues.pNr, callback);

          //Skapar lista med studentens ej besvarade test
          testlist.studentTest(propertyValues.pNr, () => {
                $(function(){
                    testlist.display('.testlist');
                    console.log(testlist);
                });
            });

          //Skapar lista med studentens besvarade test
          testdonelist.teacherTest(propertyValues.pNr, () => {
                $(function(){
                    testdonelist.display('.testlist');
                    console.log(testdonelist);
                });
            });
        }
    }

     readOneByPnrFromDb(pNr, callback){
        this.db.oneByPnr([pNr], (data)=>{
          for(var prop in data[0]){
             var val = data[0][prop];
             this[prop] = val;
          }

          callback && callback(this);
        });
    }

    getDepart(){
        if(this.department == null){
            return 'Info missing';
        }else{
            return this.department;
        }
    }

    getStart(){
        if(this.startDate == null){
            return 'Info missing';
        }else{
            return this.startDate.substring(0,this.startDate.indexOf('T'));
        }
    }

    getCountry(){
        if(this.country == null){return 'Info missing'; }
        else{return this.country; }
    }

    dOb(){
        var el = this.pNr.substring(0, 4) + '-' + this.pNr.substring(4, 6) + '-' + this.pNr.substring(6, 8);
        return el;
    }

    getEmail(){
        if(this.eMail == null){
            return 'Info@Newton.org';
        }else{
            return this.eMail;
        }
    }

    getPhone(){
        if(this.phoneNr == null){
            return '040-132 45'
        }else{
            return this.phoneNr;
        }
    }

    static get sqlQueries(){
        return {
            oneByPnr:`
                select * from Person where pNr = ? limit 1
            `
        }
      }

}
