//= require lightslider.min
//= require lightslider-custom
$('document').ready(function() {
  $(".nav a").each(function() {
    if($(this).attr('href') == location.pathname) {
      $(this).addClass("current");
    }
  });
});
