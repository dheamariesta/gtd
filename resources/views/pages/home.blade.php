@extends('layouts.master')

@section('content')
    <div id="root"></div>
@endsection

@section('script')
<script>
	// SCROLL SPY
	$('body').scrollspy({
		target: '#navbar-scrollspy',
		offset: 100
	});

	// ANIMATION SCROLLING
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
			// Only prevent default if animation is actually gonna happen
			// event.preventDefault();
			$('html, body').animate(
				{
					scrollTop: target.offset().top
				}, 
				{
					duration: 1500
				}
			) 
			}
		}
	});
	// FOR BACK TO TOP BUTTON
	var offset = 900; // the scroll point where the button will appear
	var duration = 500; // the animation of fade-in and fade-out
	var animationDuration = 1500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} 
		else {
			$('.back-to-top').fadeOut(duration);
		}
	});

	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, animationDuration);
		return false;
	});

</script>

@endsection