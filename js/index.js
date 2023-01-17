$(function(){

	let lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()
	console.log(lineTotalLength)
	$(".cMLine>svg>polyline").css("stroke-dasharray", lineTotalLength)
	let lineTop = $(`.cMLine>svg>polyline`).offset().top;

	let scrollTop,strokeLength;
	$(window).scroll(function(){
		lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()

		scrollTop = window.scrollY
		if(scrollTop > 500){
			strokeLength = scrollTop*3.5 - lineTop - 585;
			$(`.cMLine polyline`).css(`stroke-dashoffset`,lineTotalLength - strokeLength);
			console.log(lineTotalLength-(lineTotalLength - strokeLength) +"만큼그려짐");
			
		}
	});
});