$(document).ready(function() {
  $("#lightSlider").lightSlider({
    gallery: true,
    item: 1,
    thumbitem: 3,
    slideMargin: 0,
    speed:500,
    auto:true,
    loop:true,
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
