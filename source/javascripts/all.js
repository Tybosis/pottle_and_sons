//= require_tree .
$('document').ready(function() {
  $(".nav a").each(function() {
    if($(this).attr('href') == location.pathname) {
      $(this).addClass("current");
    }
  });
});
