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

$("#comment-form").validate();

if($("[type=tel]").length>0) {$("[type=tel]").mask("+(999) 999-9999", {placeholder:"+(___) ___-____"})};


$.each( $( ".image-to-bg" ),function(){
      var cssValues = {
        "background":"url(" + $(this).attr("src") + ") no-repeat center center scroll",
        "background-size":"cover"
      };
      $(this).hide();
      $(this).parent().css(cssValues);
});

    var hashTagActive = "";
    $(".scroll-more").on("click touchstart" , function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 600, 'linear');
            hashTagActive = this.hash;
        }
    });