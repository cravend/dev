$(document).ready(function(){
  $("#moreprojects").on("hide.bs.collapse", function(){
    $("#toggleproject").html('<button class="btn btn-default hvr-sweep-to-bottom" data-toggle="collapse" data-target="#moreprojects"><h4>See More</h4></button>');
  });
  $("#moreprojects").on("show.bs.collapse", function(){
    $("#toggleproject").html('<button class="btn btn-default hvr-sweep-to-top" data-toggle="collapse" data-target="#moreprojects"><h4>See Less</h4></button>');
  });
});