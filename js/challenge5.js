var imgs = $("img")
var msg = "Hover over an image below."
imgs.each(function () {
    imgs.mouseover(function () {
		$("#image").css("background-image","url('"+this.src+"')");
		$("#image").html(this.alt);
	});
	imgs.focus(function(){
		$("#image").css("background-image","url('"+this.src+"')");
		$("#image").html(this.alt);
	});
	imgs.mouseleave(function(){
		$("#image").css("background-image","url('')");
		$("#image").html(msg);
	});
	imgs.blur(function(){
		$("#image").css("background-image","url('')");
		$("#image").html(msg);
	});

});
