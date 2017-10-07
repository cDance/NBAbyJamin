$(document).ready(function () {
    
    
     var timer = null;
    $('.a-btn ,.ulbtn').hover(function () {
        clearInterval(timer);
        setTimeout(function () {
            $('#oi').attr('class', 'up');
            $(".ulbtn").stop().slideDown(300);
        }, 300);

    }, function () {
        clearInterval(timer);
        setTimeout(function () {
            $('#oi').attr('class', 'down');
            $(".ulbtn").stop().slideUp(300);
        }, 300);

    });
});