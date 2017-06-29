
//preloader on percent
var 
images = document.images,
images_total_count = images.length,
images_loaded_count = 0,
preloader = document.getElementById('page-preloader'),
perc_display = document.getElementById('lol');
for (var i = 0; i < images_total_count; i++) 
{
	image_clone = new Image();
	image_clone.onload = image_loaded;
	image_clone.onerror = image_loaded;
	image_clone.src = images[i].src;
}
function image_loaded(){
	images_loaded_count++;
	perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + '%';
	if(images_loaded_count >= images_total_count){

		setTimeout(function(){
			if(!preloader.classList.contains("done")){
				preloader.classList.add("done");
			}
		}, 1000);
	}
}

jQuery(document).ready(function($){

	new WOW().init();
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		auto:true,
		speed:700,
		easeing:'ease-in-out',
		nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
		prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
	});


//ВЫставляем картинку по размеру экрана пользователя
var height = window.outerHeight;
	console.log(height);

$("#section-home .bxslider li").height(height);
$("#section-home .bx-viewport").height(height);
$("#section-home .bxslider li h1").addClass("slideInLeft");
//Header custom
$(window).scroll(function(){
	if ( $(window).scrollTop() >= height){
		$("header").removeClass("header-abs");
		$("header").addClass("header-fix")
		$(".header-fix").animate({
			opacity:1
		},1000);
	}
	else{
		$(".header-fix").animate({
			opacity:0
		},1000)
		$("header").removeClass("header-fix");
		$("header").addClass("header-abs")


	}
});

	//skills 
	var offSetSkill = $("#section-about").offset().top;
	console.log(offSetSkill);
	$(window).scroll(function(){
		if($(window).scrollTop()>=offSetSkill){
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},2000);
			});
		}

	});
	$('#my-video').backgroundVideo();
	jQuery('.filter li a').click(function(){

		var parentul = jQuery(this).parents('ul.filter').data('related-grid');
		jQuery(this).parents('ul.filter').find('li a').removeClass('active');
		jQuery(this).addClass('active');

		var selector = jQuery(this).attr('data-option-value');
		jQuery('#'+parentul).isotope({ filter: selector }, function(){ });

		return(false);
	});
	if(jQuery().owlCarousel) { 
		jQuery("#portfolio-carousel").owlCarousel({
			navigation : false,
			items : 4,
			itemsCustom : false,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
		});
	}

	jQuery('#backtotop').click(function(e){
		e.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 1000);
		return false;						   
	});
	
});

