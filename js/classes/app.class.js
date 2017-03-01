class App {

  constructor(){
      
        var list = new PersonList();
        
        list.readAllFromDb(()=>{ // läser in personer från db
            var theNavbar = new navbar({
                personList: list
            });
            this.start(theNavbar);
        });
      
  }
    
    start(theNavbar){
        
        this.navbar = theNavbar;
        this.footer = new footer();    
        this.startPage = new start();
        this.Fragor = new Fragor();
        
        
        this.navbar.display('body');
        this.footer.display('body');
        new BootstrapSize().display('body');
        
        var router = new Router({
          '/': ()=>{ this.showPage(this.startPage); },
          
          '/Teacher/:pNr': (params)=> { 
              var page = new teacherprofile(params, this.showPage); },
            
          '/Student/:pNr': (params)=> { 
              var page = new studentprofile(params, this.showPage); },
            
          '/testresultat/:pNr/:id': (params)=> {
              var page = new testresultat(params, this.showPage); },
            
          '/Fragor': ()=> { this.showPage(this.Fragor); }
        });

}
    

    
    
    
      showPage(page){
        $('.page-content').empty();
        page.display('.page-content');
  }
}