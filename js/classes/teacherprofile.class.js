class teacherprofile extends Base {
    
    constructor(propertyValues, callback){
        super(propertyValues);
        
        var list = new studentList();
        
        console.log('teacherprofile propertyValues', propertyValues);
        
        if(propertyValues.pNr){
            list.teacherStudent(propertyValues.pNr, () => {
                //$('.stud').empty();
                $(function(){
                    list.display('.stud');
                    console.log(list);
                });
            });
           
          this.readOneByPnrFromDb(propertyValues.pNr, callback);
        }
        
    }
    
    getStart(){
        if(this.startDate == null){
            return 'Info missing';
        }else{
            return this.startDate.substring(0,this.startDate.indexOf('T'));
        } 
    }
    
    getDepart(){
        if(this.department == null){
            return 'Info missing';
        }else{
            return this.department;
        }
    }
    
    dOb(){
        // 198909144274
        var el = this.pNr.substring(0, 4) + '-' + this.pNr.substring(4, 6) + '-' + this.pNr.substring(6, 8);
        console.log(el);
        return el;
    }
    
    getGender(){
        if(this.gender == null){
            return 'Info missing';
        }else{
            return this.gender;
        }
    }
    
    getEmail(){
        if(this.eMail == null){
            return 'Info@Newton.org';
        }else{
            return this.eMail;
        }
    }
    
    getCountry(){
        if(this.country == null){return 'Info missing'; }
        else{return this.country; }
    }
    
    getPhone(){
        if(this.phoneNr == null){
            return '040-132 45'
        }else{
            return this.phoneNr;
        }
    }
    
    getImg(){
        if(this.img == null){
            return 'http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg';
        }else{
            return this.img;
        }
    }
    
    getBio(){
        if(this.bio == null){
            return 'Info missing';
        }else{
            return this.bio;
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
    

    
    static get sqlQueries(){
        return {
            oneByPnr:`
                select * from Person where pNr = ? limit 1
            `
        }
      }

}