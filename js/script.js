/* global $ */
 


 $("button").click(function() {
    var name=String($("#name").val());
    var q1input=String($("#question1").val());
    var q2input=String($("#question2").val());
    var q3input=String($("#question3").val());
    var q4input=String($("#question4").val());
    var q1num=q1input.split("").length;
    var q2num=q2input;
    var q3num=q3input.split("").length;
    var q4num=q4input.split("").length;
    var namenum=name.split("").length;
    things1(q1num,q2num,q3num,q4num,namenum);
    $("button").hide();
    
    });


function things1(x1,y1,z1,a1,b1){
    var x=Number(x1);
    var y=Number(y1);
    var z=Number(z1);
    var a=Number(a1);
    var b=Number(b1);
    var name=$("#name").val();
    var totalScore=x+y+z+a+b;
   if(totalScore>0&&totalScore<15){
        $(".finalans").html("Congratluates to "+name+". Your best hero in overwatch is Dva");
        $(".finalpic").html("<img src=https://vignette.wikia.nocookie.net/topstrongest/images/8/83/DVa_eject.gif/revision/latest?cb=20160926190742>");
   }
   else if(totalScore>15&&totalScore<20){
       $(".finalans").html("Congratluates to "+name+". Your best hero in overwatch is Genji");
       $(".finalpic").html("<img src=https://steamusercontent-a.akamaihd.net/ugc/780659514674840250/C58270E6DD53734EAD215A66CA5728A48F2F4929/>");
   }
   else if(totalScore>20&&totalScore<25){
       $(".finalans").html("Congratluates to "+name+". Your best hero in overwatch is McCree");
        $(".finalpic").html("<img src=https://pa1.narvii.com/6495/5504406ae89d12b99e65642a0b4fb0d95e2cb047_hq.gif>");
       
   }
   else if(totalScore>30&&totalScore<35){
        $(".finalans").html("Congratluates to "+name+". Your best hero in overwatch is Reinhart");
        $(".finalpic").html("<img src=http://i.kinja-img.com/gawker-media/image/upload/s--3JDb1i5w--/dddqkxy4qkgw2u9ik3k2.gif>");
       
   }
   else{
       $(".finalans").html("Congratluates to "+name+". Your best hero in overwatch is none");
       $(".finalpic").html("<img src=https://thumbs.gfycat.com/YellowishFrankArgusfish-max-1mb.gif>");
       
   }
       
}


