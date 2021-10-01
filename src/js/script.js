$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right.png"></button>',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				arrows: false,
				dots: true
			  }
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  });
});    