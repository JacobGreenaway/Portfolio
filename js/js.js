$(document).ready(function () {
	//alert( $(".please"));
    $(".myClass").hide().fadeIn(1000);

    $('body').plusAnchor({
		easing: 'easeOutExpo',
		speed:  1000
	});

	/* Hides the nav bar on scrolling */

	$(function () {
	  	$('.navbar').each(function () {
	    	var $doc = $(document)
	      		, $win = $(window)
	      		, $self = $(this)

	      		, isHidden = false
	      		, lastScrollTop = 0

			$win.on('scroll', function () {
			    var scrollTop = $doc.scrollTop()
			    var offset = scrollTop - lastScrollTop
			    lastScrollTop = scrollTop

			    // min-offset, min-scroll-top
			    if (offset > 10 && scrollTop > 100 ) {
				    if (!isHidden) {
				        $self.addClass('headroom-hidden')
				          	isHidden = true
				        }
			    } else if (offset < -10 || scrollTop < 200) {
				    if (isHidden) {
				        $self.removeClass('headroom-hidden')
				        isHidden = false
				    }
	      		}
	    	})
	  	})
	})
	
});


