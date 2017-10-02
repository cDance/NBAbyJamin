//
//$(function () {
//
//     
//         
// }),
// 


$(document).ready(function () {
    //    media-share qrcore功能：
    $('.media-share-list').find('li').hover(function () {

        $('#media-share').find('div').eq($(this).index()).stop().slideToggle(300);
    });



    //    nba store下拉菜单：
    var timer = null;
    $('.a-btn ,.ulbtn').hover(function () {
        clearInterval(timer);
        setTimeout(function () {
            $('#oi').attr('class', 'up');
            $(".ulbtn").stop().slideDown(100);
        }, 100);

    }, function () {
        clearInterval(timer);
        setTimeout(function () {
            $('#oi').attr('class', 'down');
            $(".ulbtn").stop().slideUp(100);
        }, 100);

    });
    
    //定位菜单
    var oNav = $('#nav-fixed'),
		oNav_SH =oNav.offset();
	$(document).on('scroll',function(){
		var	oDoc_SH = $(document).scrollTop();
//        alert(c);
		if(oDoc_SH>=80)
        {
           oNav.addClass('content'); oNav.css({'position':'fixed','top':'0px','display':'block'});
        }
        else
        {
            oNav.css({'display':'none'})
        }
		});
    
    //更多资讯按钮
    $('moreinfo-btn').hover
    
});
