$(document).ready(function(){
	$(".go").on("click",function(){
		$( document ).keyup(function(e) {
 			if(e.keyCode == 81){
 				$(".player1").find(".active").removeClass("active").next("span").addClass("active")
			}
 			if(e.keyCode == 80){
 				$(".player2").find(".active").removeClass("active").next("span").addClass("active")
 			}
		})
		$(".restart").on("click", function(){
		  $(".carrera").find(".active").removeClass("active")
		  $(".carrera").find(".start").addClass("active")
		})
	})
})

