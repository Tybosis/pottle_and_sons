//= require lightslider.min
//= require lightgallery
//= require lightslider-custom

$('document').ready(function() {
  $(".nav a").each(function() {
    if($(this).attr('href') == location.pathname) {
      $(this).addClass("current");
    }
  });
});
