$(function(){

	let lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()
	console.log(lineTotalLength)

	$(".cMLine>svg>polyline").css("stroke-dasharray", lineTotalLength)
	$(".cMLine>svg>polyline").css("stroke-dashoffset", lineTotalLength)
	let lineTop = $(`.cMLine>svg`).offset().top;
	let lineObj = $(`.cMLine>figure`).offset().top + $(`.cMLine>figure`).offset().left;
	

	let scrollTop,strokeLength,lineLength;
	$(window).scroll(function(){
		lineTotalLength = $(".cMLine>svg>polyline").get(0).getTotalLength()
		scrollTop = window.scrollY
		if(scrollTop > 500){
			strokeLength = (scrollTop*2.95) - (lineTop*0.2 + 500);
			$(`.cMLine polyline`).css(`stroke-dashoffset`,lineTotalLength - strokeLength);
			//console.log(lineTotalLength-(lineTotalLength - strokeLength) +"만큼그려짐");
		}
		console.log(lineLength);
		lineLength = lineTotalLength - (lineTotalLength - strokeLength);
		$(`.cMLine>figure`).each(function(i){
			let figureXYLength = null;
			let distanceFigureX = null;
			let distanceFigureY = null;
			let figureHeight = $(this).height();
			if($(this).position().left - $(this).prev().position().left<0){
				distanceFigureX = -($(this).position().left - $(this).prev().position().left)
			}else{
				distanceFigureX = ($(this).position().left - $(this).prev().position().left)
			}
			if($(this).position().top - $(this).prev().position().top < 0){
				distanceFigureY = -($(this).position().top - $(this).prev().position().top);
			} else {
				distanceFigureY = ($(this).position().top - $(this).prev().position().top);
			}
			let figureX = $(this).prev().position().left + distanceFigureX;
			let figureY = $(this).prev().position().top + distanceFigureY;
			if($(this).hasClass("line")){
				figureY+=figureHeight
			}
			console.log(figureX +"+"+figureY)
			figureXYLength = (figureY+figureX)*1.35;
			
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