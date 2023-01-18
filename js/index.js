$(function(){

	let lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()
	console.log(lineTotalLength)

	$(".cMLine>svg>polyline").css("stroke-dasharray", lineTotalLength)
	$(".cMLine>svg>polyline").css("stroke-dashoffset", lineTotalLength)
	let lineTop = $(`.cMLine>svg>polyline`).offset().top;
	let lineObj = $(`.cMLine>figure`).offset().top + $(`.cMLine>figure`).offset().left;
	

	let scrollTop,strokeLength,lineLength;
	$(window).scroll(function(){
		lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()

		scrollTop = window.scrollY
		if(scrollTop > 500){
			strokeLength = scrollTop*3.5 - lineTop - 585;
			$(`.cMLine polyline`).css(`stroke-dashoffset`,lineTotalLength - strokeLength);
			//console.log(lineTotalLength-(lineTotalLength - strokeLength) +"만큼그려짐");
		}
		console.log(lineLength);
		lineLength = lineTotalLength - (lineTotalLength - strokeLength);
		$(`.cMLine>figure`).each(function(i){
			let figureXYLength = null;
			if($(this).hasClass("line")){
				console.log($(this).height())
				figureXYLength = ($(this).position().top+$(this).height())+$(this).position().left;

			}else{
				figureXYLength = $(this).position().top+$(this).position().left;
			}
			
			console.log("그려지는 줄의길이 : "+lineLength)
			console.log(i+"번째 figure태그 좌표의 x,y합 : "+figureXYLength)
			if (lineLength >= figureXYLength) {
				$(this).addClass(`line`);
			} else {
				$(this).removeClass(`line`);
			}
		});
	});
});