let windowInnerheight = window.innerHeight;
$(function(){
    console.log(windowInnerheight);
    $(`.gnb>li>a`).click(function(e){
		e.preventDefault();
		let targetHref = $(this).attr(`href`);
		let posTop = $(targetHref).offset().top;
		$(`html,body`).stop().animate({scrollTop:posTop},500);
	});
    $(`.toggleBar`).click(function(){
        $(this).toggleClass(`active`);
        $(this).next().toggleClass(`active`);
    });
    lineLength = $(`.mainLine`).get(0).getTotalLength();
    winHalf = window.innerHeight/2;
    figure = $(`.cMLine>figure`);
    $(window).scroll(function(){
        scrollTop = window.scrollY;
        mLine = lineLength + winHalf - (scrollTop*2.75)
        if (windowInnerheight<815) {
            mLine = (mLine*1.25)
        }
        $(`.mainLine`).css(`stroke-dashoffset`, mLine);
        if (windowInnerheight<815) {
            figure.each(function(){
                if(dasArrayBase[$(this).index()] < (lineLength-winHalf-mLine)){
                    $(this).addClass(`line`);
                } else {
                    $(this).removeClass(`line`);
                }
            });
        } else {
            figure.each(function(){
                if(dasArrayBase[$(this).index()] < (lineLength-mLine)){
                    $(this).addClass(`line`);
                } else {
                    $(this).removeClass(`line`);
                }
            });
        }
        if ($(`.bottomSvg`).offset().top*.7 > scrollTop) {
            $(`.bottomSvg>figure`).removeClass(`scroll`);
        } else {
            $(`.bottomSvg>figure`).addClass(`scroll`);
        }
        
    });
    let figureArray = getArrayFigure('.cMLine');
    let figureArrayCoords = getCoordinate(figureArray);
    let disArray = getDistanaceArray(figureArrayCoords);
    let dasArrayBase = getDistanceBase(disArray);
    console.log(dasArrayBase);

});
