$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
  $(".menu li").hover(function(){
    $(this).css("background", "white");
},
function(){
    $(this).css("background","transparent");
});
});


