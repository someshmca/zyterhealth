$(document).ready(function(){
    $("#covidScreen1").show();
    $("#covidScreen2").hide();
    $("#covidScreen3").hide();
    $("#covidScreen4").hide();
    $("#covidScreen5").hide();
    $("#covidScreen6").hide();
    $("#covidScreen7").hide();
    
});

    
function gotoSection(sectionName){
    $("#covidScreen1").hide();
    $("#covidScreen2").hide();
    $("#covidScreen3").hide();
    $("#covidScreen4").hide();
    $("#covidScreen5").hide();
    $("#covidScreen6").hide();
    $("#covidScreen7").hide();
    $('#'+sectionName).show();
}