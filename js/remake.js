let lineLength, scrollTop, winHalf, figures, mLine;
$(function(){
    lineLength = $(`.mainLine`).get(0).getTotalLength();
    winHalf = window.innerHeight/2;
    figure = $(`.cMLine>figure`);
    let figureX1 = [];
    let figureX2 = [];
    figure.each(function(i){
        figureX1[i] = Math.abs($(this).prev().position().left - Math.abs($(this).position().left));
        if(i == 0){
            figureX2[i] = figureX1[i];
        } else if (i == 1){
            figureX2[i] = figureX1[i-1] + figureX1[i]
        } else if (i > 1){
            figureX2[i] = figureX2[i-1] + figureX1[i]
        }
    });
    console.log(figureX1);
    console.log(figureX2);
    

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

    let figureArray = getArrayFigure('.cMLine')
    let figureArrayCoords = getCoordinate(figureArray)
    console.log(figureArrayCoords)
    let disArray = getDistanaceArray(figureArrayCoords)
    let dasArrayBase = getDistanceBase(disArray)
    console.log("완성 원점거리"+dasArrayBase)

});

function getArrayFigure(selector){
    return $(selector).children("figure")
}
function getCoordinate(figureArray){
    let resultArray = [];
    for(let i=0 ; i<figureArray.length ; i++){
        resultArray.push($(figureArray[i]).position())
    }
    return resultArray
}
function getDistanaceArray(coordArray){
    let disArray = []
    for(let i=0 ; i<coordArray.length ; i++){
        
        let xDis = Math.abs(coordArray[i].left-((i==0)?0:coordArray[i-1].left))
        let yDis = Math.abs(coordArray[i].top-((i==0)?0:coordArray[i-1].top))
        let dis = xDis+yDis;    
        disArray.push(dis)
    }
    return disArray
    // Math.abs($(this).prev().position().left - Math.abs($(this).position().left));
}
function getDistanceBase(GDA){
    console.log(GDA)
    let dis = 0;
    let disArrayBase = []
    for(let i=0 ; i<GDA.length ; i++){
            dis += GDA[i]
            disArrayBase.push(dis)
    }
    return disArrayBase
}