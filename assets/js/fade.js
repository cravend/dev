/**
* Listen to scroll to change header opacity class
*/
function checkScroll(){
  var startY = $(window).height()/1.5; //The point where the navbar changes in px

  if($(window).scrollTop() < startY){
    // $('.brand-mobile').addClass("hidden");
    $('.brand-mobile').fadeOut();
  }else{
    // $('.brand-mobile').removeClass("hidden");
    $('.brand-mobile').fadeIn();
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
    checkScroll();
  });
}
