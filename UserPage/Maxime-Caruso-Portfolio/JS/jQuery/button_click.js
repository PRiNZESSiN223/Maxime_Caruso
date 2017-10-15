$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("#up").on('click', function(event) {

	      event.preventDefault();
	      
	      $('html, body').animate({
	        scrollTop: 0
	      }, 500, function(){

	      });

	  });


	});