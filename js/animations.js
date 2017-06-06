var activeProjects = false;

// function scrolling() {
// 	if (!activeProjects && ($($('.navbar-nav li')[1]).hasClass('active') || $($('.navbar-nav li')[2]).hasClass('active'))) {
// 		activeProjects = true;
// 		animateProjects();
// 	}
// }

$(document).ready(function() {
	if (jQuery().velocity && jQuery().scramble) {
		$('#nameplate').text('LXEO AEYLF').scramble('ALEX FOLEY', {initialDelay: 1500, yDuration: 600, xDuration: 1000, align: 'center'});//, wordList: ['AXLE FOLEY'], infinite: true});
	}
});

$(window).scroll(function() {
  $("#bg").css({
    'opacity': 1 - (Math.sqrt(($(this).scrollTop())) / 40)
  });
});

// function animateProjects() {
// 	var offset = 0;
// 	$('.project').each(function() {
// 		$(this).velocity('fadeIn', {
// 			duration: 1000, 
// 			delay: offset, 
// 			visibility: 'visible', 
// 			display: 'inline-block'
// 		});
// 		offset += 300;
// 	});
// }