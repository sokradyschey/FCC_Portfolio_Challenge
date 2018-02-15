window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function(){

   $("div").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
   });

});