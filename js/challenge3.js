$("form").submit(function( event ) {
    var fruitbool = false;
    var classbool = false;
    $("input[name='fruit']").each(function(){
        if ($(this).is(":checked")) {
            fruitbool = true;
        }
      })
    $("input[name='standing']").each(function(){
        if ($(this).is(":checked")) {
            classbool = true;
    }
    })
    if (!fruitbool && !classbool){
        event.preventDefault();
        alert("You must pick a class standing and fruit!");
    }
    else if (!fruitbool){
        event.preventDefault();
        alert("You much pick a fruit!");
    }
    else if (!classbool){
        event.preventDefault();
        alert("You much pick a class standing!")
    }
    else{
        event.submit();
    }
});