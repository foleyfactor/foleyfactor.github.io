var activeProjects = false;

function scrolling() {
	if (!activeProjects && $($('.navbar-nav li')[2]).hasClass('active')) {
		activeProjects = true;
		animateProjects();
	}
}

$(document).ready(function() {
	if (jQuery().velocity && jQuery().scramble) {
		$('#nameplate').scramble('ALE EL FOXY', {initialDelay: 3200, xDuration: 1000, yDuration: 600, align: 'center', wordList: ['AXLE FOLEY'], infinite: true});
	}
});

$(window).on('scroll', scrolling);
$(window).on('load', scrolling);

function animateProjects() {
	var offset = 0;
	$('.project').each(function() {
		$(this).velocity('fadeIn', {
			duration: 1000, 
			delay: offset, 
			visibility: 'visible', 
			display: 'inline-block'
		});
		offset += 300;
	});
}