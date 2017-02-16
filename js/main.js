
$(start);


function start(){
    console.log('Hello and welcome!');
}


$(document).on('click', 'input[type=radio]', function(){
    
    var el = $(this).val(); // tar emot 1 till 4 
    
    console.log('hej du har klickat på mig! ' + el);

    
});