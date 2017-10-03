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
    $('.main-lastest-more-info').hover(function(){
        $(this).find('span').css("color","#FFF");
        $(this).css("background-color","#2464b5");
        $(this).find('span').attr("class","moreinfo-btn1");
    },function(){
        $(this).find('span').css("color","#2464b5");
        $(this).css("background-color","#F0F0F0");
        $(this).find('span').attr("class","moreinfo-btn");
    });
    
    //导航字体颜色
    var aA=$('.header-bottom').find('a');
        for(var i=0;i<aA;i++){
//            aA[i].index=i;
            aA[i].onclick=function(){
                aA[i].css("color","red");
                alert(this.index);
            }
        }
});
