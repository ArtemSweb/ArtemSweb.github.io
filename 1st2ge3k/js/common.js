$(function() {

	$('.logo-litera').each(function(){
		let ths = $(this);
		ths.html(ths.html().replace('1', '<span>1</span>'));
		ths.html(ths.html().replace('2', '<span>2</span>'));
		ths.html(ths.html().replace('3', '<span>3</span>'));
	});

	$('.search').click(function(){
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();
	});

	$(document).keyup(function(e) {
		if(e.keyCode == 27) {
			$('.search-field').slideUp();
		}
	}).click(function(){
		$('.search-field').slideUp();
	});

	$('.search-wrap').click(function(e) {
		e.stopPropagation();
	});

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function(){
		$('.mobile-menu').stop().slideToggle();
	});

	//Обработчик для секции "Обзоры" главной страницы

	$('.col-item').hover(function() {
		ths = $(this);
		lnk = ths.closest('.col-item').find('h4 a');
		lnk.addClass('hover');
	}, function(){
		lnk.removeClass('hover');
	});

	$("body").prognroll({
		height: 3,
		color: "#ff6347",
		custom: false
	});

	$('.main-menu li').removeClass('active');
	var path = window.location.pathname;
	$('.main-menu li a').each(function() {
		var href = $(this).attr('href');
		if(path.slice(1).substring(0, href.length) === href) {
			$(this).parent('li').addClass('active');
		}
	});


});
