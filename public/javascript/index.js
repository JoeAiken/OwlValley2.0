$(document).ready(function() {
	
	$('.carousel').carousel();
	$('#hoursModal').trigger("focus");
	$('#submitted').trigger("focus");

	 /* SlimMenu Prep */
	 $('#navigation').slimmenu({
		resizeWidth: '800',
		collapserTitle: '',
		animSpeed: 0,
		easingEffect: null,
		indentChildren: false,
		childrenIndenter: '&nbsp;',
		expandIcon: '',
		collapseIcon: ''
	  });

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