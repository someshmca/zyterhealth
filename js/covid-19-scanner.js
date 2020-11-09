$(document).ready(function(){
    $("#covidScreen1").show();
    $("#covidScreen2").hide();
    $("#covidScreen3").hide();
    
});

    
function gotoSection(sectionName){
    $("#covidScreen1").hide();
    $("#covidScreen2").hide();
    $("#covidScreen3").hide();
    $('#'+sectionName).show();
}