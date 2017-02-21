class App {

  constructor(){
      
      var start = new start();
      var Fragor = new Fragor();
      //var testresultat = new testresultat();

    // Development tool
    new BootstrapSize().display('body');
    //var testDataGen = new TestDataGenerator();
      
    new navbar().display('body');
      
      
    new router();
      
      
    new footer().display('body');
    
  } 
    
}