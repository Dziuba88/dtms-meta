$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});


$.each( $( ".img-to-bg img" ), function(){
  var cssValues = {
    "background":"url(" + $(this).attr("src") + ") no-repeat center center scroll",
    "background-size":"cover"
  }
  $(this).hide();
  $(this).parent().css(cssValues);
});



$(".navbar-toggle").click(function() {
  //$('html').toggleClass('overflow-hidden')
  $(this).toggleClass('active')
  $('.navbar-nav').slideToggle('750');
});

$('.owl-carousel').owlCarousel({
  items: 1,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  thumbs: true,
  thumbImage: true,
});

$("#contact-form").validate();
