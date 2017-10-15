window.addEventListener("scroll", scrollFunction);

	 var h = window.innerHeight-400;

	 function scrollFunction(){

	if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {

		$(document).ready(function(){
	        $("#bildHaus").animate({left: '0%'},1000);
        $(".animation1").animate({left: '0%'},1000);
		});}
	if (document.body.scrollTop > (h+window.innerHeight) || document.documentElement.scrollTop > (h+1000)) {

		$(document).ready(function(){
	        $("#projekt0v").fadeIn(1500);
	        $("#projekt0g").fadeIn(1500);
	        $("#buttonslide0l").fadeIn(1500);
	        $("#buttonslide0r").fadeIn(1500);
		});}
	if (document.body.scrollTop > (h+window.innerHeight*1.9) || document.documentElement.scrollTop > (h+1900)) {
		$(document).ready(function(){
	        $("#projekt1v").fadeIn(1500);
	        $("#projekt1g").fadeIn(1500);
	        $("#buttonslide1l").fadeIn(1500);
	        $("#buttonslide1r").fadeIn(1500);
		});}
	if (document.body.scrollTop > (h+window.innerHeight*1.9) || document.documentElement.scrollTop > (h+2800)) {

		$(document).ready(function(){
	        $("#projekt2v").fadeIn(1500);
	        $("#projekt2g").fadeIn(1500);
	        $("#buttonslide2l").fadeIn(1500);
	        $("#buttonslide2r").fadeIn(1500);
		});}
	 }
   $(document).ready(function(){ 
	        	$("#buttonslide0r").click(function(){
	            $("#projekt0v").animate({'margin-left':'-260%'},600);
	            $("#projekt0g").animate({'margin-left':'-85%'},600);
	        }); 
	        	$("#buttonslide0l").click(function(){
		            $("#projekt0v").animate({'margin-left':'0%'},600);
		            $("#projekt0g").animate({'margin-left':'90%'},600);
		        }); 
	        	
	           	$("#buttonslide1r").click(function(){
	           	 $("#projekt1v").animate({'margin-left':'-260%'},600);
		            $("#projekt1g").animate({'margin-left':'-85%'},600);
		        }); 
		        	$("#buttonslide1l").click(function(){
			            $("#projekt1v").animate({'margin-left':'0%'},600);
			            $("#projekt1g").animate({'margin-left':'90%'},600);
			        });
		        	
		           	$("#buttonslide2r").click(function(){
		           	 $("#projekt2v").animate({'margin-left':'-260%'},600);
			            $("#projekt2g").animate({'margin-left':'-85%'},600);
			        }); 
			        	$("#buttonslide2l").click(function(){
				            $("#projekt2v").animate({'margin-left':'0%'},600);
				            $("#projekt2g").animate({'margin-left':'90%'},600);
				        });
			       $("#nav").click(function(){
			    	   	$("#menu").animate({'width':'110%'},1000);
			    	   	$("#menu li").delay(100).animate({'font-size':'2em'},1000);
			    	   	$("#xDiv").delay(100).animate({'right':'5%'},1000);
			        });
			       $("#navHa").click(function(){
			    	   	$("#menu").animate({'width':'110%'},1000);
			    	   	$("#menu li").delay(100).animate({'font-size':'2em'},1000);
			    	   	$("#xDiv").delay(100).animate({'right':'5%'},1000);
			        });
			       $("#x").click(function(){
			    	   	$("#menu").animate({'width':'0%'},1000);
			    	   	$("#menu li").delay(100).animate({'font-size':'0em'},1000);
			    	   	$("#xDiv").delay(100).animate({'right':'-5%'},1000);
			        });
			       $("a").on('click', function(event) {
			    	   
			    	    if (this.hash !== "") {
			    	      event.preventDefault();
			    	      var hash = this.hash;
			    	      $('html, body').animate({
			    	        scrollTop: $(hash).offset().top
			    	      }, 800, function(){
			    	    window.location.hash = hash;
			    	      });
			    	      $("#menu").animate({'width':'0%'},1000);
				    	   	$("#menu li").delay(100).animate({'font-size':'0em'},1000);
				    	   	$("#xDiv").delay(100).animate({'right':'-5%'},1000);
			    	    } 
			    	    
			    	  });
	        });

 

