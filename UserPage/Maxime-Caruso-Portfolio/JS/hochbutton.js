window.addEventListener("scroll", scrollFunction);
var h = window.innerHeight;

function scrollFunction() {

    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}
   
