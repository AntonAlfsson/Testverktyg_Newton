class App {

  constructor(){
      
      new dataGenerator((navbar)=>{
      this.start(navbar);
      });
  } 
    
    start(navbar){
        
        this.navbar = navbar;
        this.footer = new footer();    
        this.startPage = new start();
        this.testresultat = new testresultat();
        this.Fragor = new Fragor();
        this.teacherprofile = new teacherprofile();
        this.studentprofile = new studentprofile();
        
        this.navbar.display('body');
        this.footer.display('body');
        new BootstrapSize().display('body');
        
        var router = new Router({
          '/': ()=>{ this.showPage(this.startPage); },
          '/Teacher': ()=> { this.showPage(this.teacherprofile); },
          '/Student': ()=> { this.showPage(this.studentprofile); },
          '/testresultat': ()=> { this.showPage(this.testresultat); },
          '/Fragor': ()=> { this.showPage(this.Fragor); }
        });
      

    
}
    
      showPage(page){
        $('.page-content').empty();
        page.display('.page-content');
  }
}