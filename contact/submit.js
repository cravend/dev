$('#contact').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/2842236/891ics/',
        type:'POST',
        data:$('#contact').serialize(),
        success:function(){
          // Redirect to another success page
          window.location = "thanks";
        }
    });
});
