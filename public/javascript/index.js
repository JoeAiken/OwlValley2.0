$(document).ready(function() {
	
	$('.carousel').carousel();
	$('#hoursModal').trigger("focus");
	$('#submitted').trigger("focus");

	  /* Add scroll class toggle */
	  $(function () {
		$(document).scroll(function () {
		  var nav = $(".sticky-top");
		  nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
		});
	  });
	
	  $('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
	
		$('html, body').animate({
		  scrollTop: $($(this).attr('href')).offset().top
		}, 700, 'linear');
	  });
});