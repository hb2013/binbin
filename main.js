$(document).ready(function(){
  $(".playvideo").click(function(){
    //document.getElementById("videoID").src = videourl+$(this).attr("data-id");
		document.getElementById("videoID").play();
    $('.playid').css("display","flex");
    TweenMax.from($('.videotext'),1,{y:100,repeat:-1,yoyo:true});
  });
});
