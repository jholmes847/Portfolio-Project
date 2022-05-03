$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
  

  $(".menu a").hover(function(){
    $(this).css("background", "white");
},
function(){
    $(this).css("background","transparent");
});
});



