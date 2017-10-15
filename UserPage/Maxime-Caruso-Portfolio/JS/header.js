
window.addEventListener("scroll", scrollFunction);


 function scrollFunction(){
	 var h = window.innerHeight-70;
	 
	 if(h<=document.documentElement.scrollTop){
		 document.getElementById("nav1").setAttribute("style","position:fixed;top:0;");
		 console.log(h,document.documentElement.scrollTop);
	 }
	 else{document.getElementById("nav1").setAttribute("style","position:absolute;");}
 }
