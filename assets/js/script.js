// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	
	// ambil isi href
	var link = $(this).attr('href');
	// tangkap elemen yg diklik
	var elemenLink = $(link);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenLink.offset().top
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});


// parallax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();


	// portfolio
	if (wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio, .thumbnail').eq(i+1).addClass('muncul');
			}, 300 * (i+1));
		});
	}

	// skill
	if (wScroll > $('.skill').offset().top - 250) {
		$('.skill .pKiri').addClass('pMuncul');
		$('.skill .pKanan').addClass('pMuncul');
	}
	
});
