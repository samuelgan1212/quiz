/* global $ */
    var name = $("#name").val();
$(document).ready(function() {
    $("button").click(function() {
    var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";

        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        things1(q1Result,q2Result,q3Result,q4Result);
        
    });



function congrats(name,techPlacement){
    $(".result").html("Congratluates to"+name+"Your dream job is "+techPlacement);
}
function things1(q1Result,q2Result,q3Result,q4Result){
   var q1num=q1Result.split(" ").length;
   var q3num=q3Result.split(" ").length;
   var q4num=q4Result.split(" ").length;
   var q2num=Number(q2Result)
   var totalScore=q1num+q2num+q3num+q4num;
   if(totalScore>10){
       congrats(name,"Dva");
   }
   else if(totalScore>15){
       congrats(name,"Genji");
   }
   else if(totalScore>30){
       congrats(name,"McCree")
   }
   else if(totalScore>40){
       
   }
   
}


});
