$('#ch4form').on('submit', function(e){
    var namelen = $("#fullname").val().length;
    var addlen = $("#streetaddr").val().length;
    if (namelen == 0 || addlen == 0){
        event.preventDefault();
        if (namelen == 0 && addlen == 0){
            $("#nameerrormsg").css("display","block");
            $("#addrerrormsg").css("display","block");
        }
        else if(namelen == 0){
            $("#nameerrormsg").css("display","block");
        }
        else{
            $("#addrerrormsg").css("display","block");
        }
    }
    if (namelen != 0 || addlen != 0){
        if (namelen != 0 && addlen != 0){
            $("#nameerrormsg").css("display","none");
            $("#addrerrormsg").css("display","none");
        }
        else if(namelen != 0){
            $("#nameerrormsg").css("display","none");
        }
        else{
            $("#addrerrormsg").css("display","none");
        }
    }
    else{
        event.submit();
    }
});


