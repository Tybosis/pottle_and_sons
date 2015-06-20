//= require_tree .

$('document').ready(function() {
  $("a[href*='" + location.pathname + "']").addClass("current");
});
