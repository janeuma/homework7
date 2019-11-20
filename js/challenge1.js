$("#subscribe").click(function(){
	var x = $("#emailField");
	if(this.checked){
		x.css("display","block");
	}
	else{
		x.css("display","none");
	}
});