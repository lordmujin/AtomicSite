$(document).ready(function() {
    $('#logoo').delay(300).fadeOut(500).delay(300).fadeIn(500).delay(300).fadeOut(500).delay(300).fadeIn(500).delay(300).fadeOut(500).delay(300).fadeIn(500);
    $('.loading').delay(4800).fadeOut(300); 
});

$(document).ready(function() {
    $('a[href*=\\#]').bind('click', function(e) {
      e.preventDefault(); 
      var target = $(this).attr("href"); 
  
      $('html, body').stop().animate({
        scrollTop: ( $(target).offset().top - 100 ) 
      }, 600, function() {
        location.hash = target;
      });
  
      return false;
    });
  });

