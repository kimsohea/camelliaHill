$(function(){

	let lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()
	console.log(lineTotalLength)
	$(".cMLine>svg>polyline").css("stroke-dasharray", lineTotalLength)

	let scrollTop,strokeLength;
	$(window).scroll(function(){
		lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()

		scrollTop = window.scrollY
		if(scrollTop>500){
			strokeLength= (scrollTop-500)*4 - 100;
			$(`.cMLine polyline`).css(`stroke-dashoffset`,lineTotalLength - strokeLength);
			console.log(lineTotalLength-(lineTotalLength - strokeLength) +"만큼그려짐");
			if(strokeLength>372){

			}
		}
	});
});