$(document).ready(function(){
  $("#moreprojects").on("hide.bs.collapse", function(){
    $("#toggleproject").html('<h4>See More</h4>');
  });
  $("#moreprojects").on("show.bs.collapse", function(){
    $("#toggleproject").html('<h4>See Less</h4>');
  });
});