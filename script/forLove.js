var winHeight =	$(window).height();
var winWidth = $(window).width();
var size;

var setSize = function(){
	if(winHeight > winWidth){
		size = winWidth * 0.8;
	} else {
		size = winHeight * 0.8;
	}
	$("#loveImage").height(size);
	$("#loveImage").width(size);
}