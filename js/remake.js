$(function(){
    lineLength = $(`.mainLine`).get(0).getTotalLength();
    winHalf = window.innerHeight/2;
    figure = $(`.cMLine>figure`);
    $(window).scroll(function(){
        scrollTop = window.scrollY;
        mLine = lineLength + winHalf - (scrollTop*3)
        $(`.mainLine`).css(`stroke-dashoffset`, mLine);
        // console.log(lineLength-mLine);
        figure.each(function(){
            if(dasArrayBase[$(this).index()] < (lineLength-mLine)){
                $(this).addClass(`line`);
			} else {
				$(this).removeClass(`line`);
			}
        });
    });
    let figureArray = getArrayFigure('.cMLine');
    let figureArrayCoords = getCoordinate(figureArray);
    let disArray = getDistanaceArray(figureArrayCoords);
    let dasArrayBase = getDistanceBase(disArray);
});
