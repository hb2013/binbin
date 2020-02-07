$(document).ready(function(){
  $(".playvideo").click(function(){
    //document.getElementById("videoID").src = videourl+$(this).attr("data-id");
		document.getElementById("videoID").play();
    $('.playid').css("display","flex");
    //TweenMax.from($('.videotext'),1,{y:300,repeat:-1,yoyo:true});
    TweenMax.from($('.videotext img'),1.5,{rotationY:360,repeat:-1,yoyo:true,onComplete:function(){

    }});
  });
});
