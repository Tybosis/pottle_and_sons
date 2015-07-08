$(document).ready(function() {
  var slide = $("#lightSlider");
  $("#lightSlider").lightSlider({
    gallery: true,
    item: 1,
    thumbitem: 3,
    slideMargin: 0,
    speed:1000,
    auto:true,
    loop:true,
    pause:4000,
    autoWidth: false,
    enableDrag: false,
    onSliderLoad: function(el) {
      el.lightGallery({
        selector: '#lightSlider .lslide',
        loop: true
      });
    }
  });
});
