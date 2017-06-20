$(document).ready(function(){
  $("#moreprojects").on("hide.bs.collapse", function(){
    $("#toggleproject").html('<h4>See More</h4>');
    $("#toggleproject").addClass('hvr-sweep-to-bottom');
    $("#toggleproject").removeClass('hvr-sweep-to-top');
    
  });
  $("#moreprojects").on("show.bs.collapse", function(){
    $("#toggleproject").html('<h4>See Less</h4>');
    $("#toggleproject").addClass('hvr-sweep-to-top');
    $("#toggleproject").removeClass('hvr-sweep-to-bottom');
  });
});