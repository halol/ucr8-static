/* global $ */
'use strict';

$(document).ready(function() {
  // $('.js-maps-location').attr('id', function() {
  //   var mapsUrl = 'https://goo.gl/maps/fFWu2cjkwj82';
  //   if(Modernizr.touch) {
  //     var mapsUrl = 'comgooglemaps://?saddr=276+Kingsland+Rd,+London+E8+4DG&zoom=14';
  //   }
  //   console.log(mapsUrl);
  //   return mapsUrl;
  // });

  function resizeHeader() {
    var winHeight = $(window).height();
    var logosHeight = $('.client-logos').innerHeight();
    if($(window).width() >= 500) {
      $('header.header').css({
        minHeight: winHeight-logosHeight
      });
    }

    console.log(winHeight);
    console.log(logosHeight);

  }
  resizeHeader();

  $(window).resize(function() {
    resizeHeader();
  });


  $('body').scrollspy({ target: '#navbar-spy', offset: 50 });
  $('#navbar-spy a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });


  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    // e.target // newly activated tab
    // e.relatedTarget.find('video').paused;
    // console.log(e.target);
    // console.log(e.relatedTarget.hash);
    //
    // var closingHash = e.relatedTarget.hash;
    var iframe = $(e.relatedTarget.hash).find('iframe');
    var src = iframe.attr('src');
    iframe.attr('src', '');
    iframe.attr('src', src);
  });

});
