
$(document).ready(function () {
    //    media-share qrcore功能：
    $('.media-share-list').find('li').hover(function () {

        $('#media-share').find('div').eq($(this).index()).stop().slideToggle(300);
    });



    //    nba store下拉菜单：
    var timer_Menu = null;
    $('.nbastore-btn ,.nba-goods').hover(function () {
        clearInterval(timer_Menu);
        setTimeout(function () {
            $('#oi').attr('class', 'up');
            $(".nba-goods").stop().slideDown(200);
        }, 300);

    }, function () {
        clearInterval(timer_Menu);
        setTimeout(function () {
            $('#oi').attr('class', 'down');
            $(".nba-goods").stop().slideUp(200);
        }, 300);

    });
    
    //    nba-use login：
    var timer_User = null;
    $('.nav-user').hover(function () {
        clearInterval(timer_User);
        setTimeout(function () {
            $('.user-log').stop().show();
        }, 1000);
    }, function () {
        clearInterval(timer_User);
        setTimeout(function () {
           $('.user-log').stop().hide();
        },1000);
    });
    
    
    
     // 搜索框 --全局
    $("#nav-search").click(function(){
        $("#search-bar").show().animate({
            width: '150',
        });
    });
     
    
    
    //    定位菜单
    var oNav = $('#nav-fixed'),
		oNav_SH =oNav.offset();
	$(document).on('scroll',function(){
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
  
    
   
   
    //视频tab
    var aSpan=document.getElementsByClassName("nav-tab")[0].getElementsByTagName("span");
        var aDiv=document.getElementById("tab-wrap").getElementsByClassName("video_img_tra");   
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].index=i;
            aSpan[i].onclick=function(){
                
                for(var i=0;i<aDiv.length;i++){
                    aSpan[i].className=" ";
                    aDiv[i].style.display="none";
                    
                }
            this.className="active";
            aDiv[this.index].style.display="block";    
            }
        };
   
    
    
    // rank排名
    var aA = document.getElementById('rank-tab').getElementsByTagName('a');
    var aTable = document.getElementById('rank-content').getElementsByTagName("div");
    for (var i = 0; i < aA.length; i++) {
        aA[i].index = i;
        aA[i].onclick = function() {
            for (var i = 0; i < aTable.length; i++) {
                aA[i].className = " ";
                aTable[i].style.display = "none";
            }
            this.className = "active";
            aTable[this.index].style.display = "block";
        }
    };
    
});


