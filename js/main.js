
$(start);


function start(){
    console.log('Hello and welcome!');
}

function checked(id){ // funktion för att kontrollera checkbox
if($("#" + id).is(':checked'))
    return true;
else
    return false;
}


