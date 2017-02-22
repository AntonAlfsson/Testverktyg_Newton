class App {

  constructor(){
      
      
      
      new dataGenerator((teacherprofile)=>{
      this.start(teacherprofile);
      });
  
  } 
    
    start(teacherprofile){
        
        this.navbar = new navbar();
        this.footer = new footer();    
        this.startPage = new start();
        this.testresultat = new testresultat();
        this.Fragor = new Fragor();
        this.teacherprofile = teacherprofile;
        
        this.navbar.display('body');
        this.footer.display('body');
        new BootstrapSize().display('body');
        
        var router = new Router({
          '/': ()=>{ this.showPage(this.startPage); },
          '/teacherprofile': ()=> { this.showPage(this.teacherprofile); },
          '/Fragor': ()=> { this.showPage(this.Fragor); },
          '/testresultat': ()=> { this.showPage(this.testresultat); }
        });
      

    
}
    
      showPage(page){
        $('.page-content').empty();
        page.display('.page-content');
  }
}