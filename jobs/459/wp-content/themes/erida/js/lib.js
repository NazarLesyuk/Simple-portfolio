$(window).scroll( function(){
			
	/* ANIMATION FADE IN */			
    $('.fadein').each(function(){
    	var self= $(this);
    	var animation_speed = self.data('animation-speed')*1000;
    	var animation_delay = self.data('animation-delay')*1000;
        var bottom_of_object = self.offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object){
        	setTimeout(function(){
	        	self.animate({'opacity':'1'}, animation_speed);
        	}, animation_delay)
            
        }
    }); 
    
    /* ANIMATION SLIDELEFT AND SLIDERIGHT */
	$('.slideleft, .slideright').each(function(){
		var self= $(this);
		var animation_speed = self.data('animation-speed')+'s';
		var animation_delay = self.data('animation-delay')*1000;
		self.css({
			"-webkit-transition": animation_speed,
			"-moz-transition": animation_speed,
			"-ms-transition": animation_speed,
			"-o-transition": animation_speed,
			"transition": animation_speed
		});
        var bottom_of_object = self.offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object){
        	setTimeout(function(){
	        	self.css({
					"-webkit-transform":"translate(0px,0px)",
					"-moz-transform":"translate(0px,0px)",
					"-ms-transform":"translate(0px,0px)",
					"-o-transform":"translate(0px,0px)",
					"transform":"translate(0px,0px)",
				});
        	}, animation_delay)
		}
    });
    
    /* ANIMATION ZOOM */			
    $('.zoom').each(function(){
    	var self=$(this)
    	var animation_speed = self.data('animation-speed')+'s';
    	var animation_delay = self.data('animation-delay')*1000;
    	self.css({
			"-webkit-transition": animation_speed,
			"-moz-transition": animation_speed,
			"-ms-transition": animation_speed,
			"-o-transition": animation_speed,
			"transition": animation_speed
		});
        var bottom_of_object = self.offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object){
        	setTimeout(function(){
	            self.css({
		            "-webkit-transform":"none",
					"-moz-transform":"none",
					"-ms-transform":"none",
					"-o-transform":"none",
					"transform":"none"
	            });
        	}, animation_delay)
        }
    });
});

$.fn.scrollTo = function( target, options, callback ){
	if(typeof options == 'function' && arguments.length == 2){ 
		callback = options;
		options = target; 
	}
	var settings = $.extend({
		scrollTarget  : target,
		offsetTop     : 50,
		duration      : 500,
		easing        : 'swing'
		}, options);

	return this.each(function(){
		var scrollPane = $(this);
		var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
		var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
		scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
			if (typeof callback == 'function') { 
				callback.call(this);
			}
		});
	});
}



$(document).ready(function(){

	

	$(".fancybox").fancybox();	

	$("#overlay").click(function(){
		hidePopup();
	});

	$(".popup").click(function(e){
		e.preventDefault();
		e.stopPropagation();
	});

	$(".menu-item").click(function(e){
		$('html, body').animate({
			scrollTop: $(""+$(e.currentTarget).data("scroll-target")).offset().top-35
		}, 500);

	});

	

	function addZeroes(number,zeroesnum){
		number=number+'';
		while(number.length<zeroesnum){
			number="0"+number;
		}
		return number;
	};

	function getMonthName(num){
		if(num===0){
			return "января";
		}
		if(num===1){
			return "февраля";
		}
		if(num===2){
			return "марта";
		}
		if(num===3){
			return "апреля";
		}
		if(num===4){
			return "мая";
		}
		if(num===5){
			return "июня";
		}
		if(num===6){
			return "июля";
		}
		if(num===7){
			return "августа";
		}
		if(num===8){
			return "сентября";
		}
		if(num===9){
			return "октября";
		}
		if(num===10){
			return "ноября";
		}																					
		if(num===11){
			return "декабря";
		}
	};

	function showPopup(type){
		if(type!=null){
			type="."+type;
		}
		$(".popup").hide();
		$(".popup"+type).show();
		$("#overlay").show();
	};

	function hidePopup(){
		$(".popup").hide();
		$("#overlay").hide();
	};

	window.onbeforeunload = function(){
		if(window.buttonpressed){
			return;
		}
		setTimeout(function(){
			showPopup("superoffer");
		}, 1);
		document.getElementById("overlay").style.display = "block";
		return "******************************\n\nВ А Ж Н О Е С О О Б Щ Е Н И Е:\n\nКЛИКНИТЕ ПО КНОПКЕ ОТМЕНА/CANCEL, ЧТОБЫ\nОСТАТЬСЯ НА ЭТОЙ СТРАНИЦЕ И ПОЛУЧИТЬ\nСКИДКУ НА ВСЕ НАШИ УСЛУГИ В 50%!\n\nНАЖМИТЕ НА КНОПКУ ОТМЕНА\n\n******************************";
	};

	$(".button-contact").click(function(){
		showPopup("phone");
	});

	window.about_table_hidden = true;

	// $(document).scroll(function(e){
	// 	if(window.about_table_hidden===true){
	// 		var about_y = $(".about-table").offset().top + 100;
	// 		var document_y = $(document).scrollTop() + $(window).height();

	// 		if(document_y > about_y){
	// 			window.about_table_hidden = false;
	// 			var i = 0;
	// 			$(".about-item").each(function(e){
	// 				var self=this;
	// 				i++;
	// 				setTimeout(function(){
	// 					$(self).animate({
	// 						opacity:1
	// 					},300);
	// 				},i*300);
					

	// 			});
	// 		}
	// 	}
	// });
});