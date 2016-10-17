  //revievs
    $(".tab-item").not(":first").hide();
    $(".cont-testimonials .tab").click(function() {
      $(".cont-testimonials .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");



$( document ).ready(function() {
    var $container = $('.isotope');
    // filter buttons
    $('#filters button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.item', filter: selector });
      return false;
    });
    
});


