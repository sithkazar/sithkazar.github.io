jQuery(document).ready(function(){var a=jQuery;a("#vlightbox4 .vlightbox4").mouseenter(function(){var b=a("div.vlb_zoom",this);if(!b.length){b=a(">a",this).get(0)||this;b=a('<div class="vlb_zoom" style="position:absolute">').html(a(b).html()).hide().appendTo(this);a("img:first",b).detach();b.html(b.html().trim())}if(b.html()){b.slideDown("fast")}}).mouseleave(function(){if(a("div",this).html()){a("div",this).slideUp("fast")}})});