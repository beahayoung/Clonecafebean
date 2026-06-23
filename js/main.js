

$(document).ready(function(){
    // 스크롤
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        // /$(".menu li i").text(st);
    
       if(st > 120) {
           $("#header").css({position:"fixed"});
           $("#header .head").css({display:"none"});
           $('#header').css({ top: -30});
           $("#header").css({width:"100%"});
           
        } else {
            $("#header").css({position:"absolute"});
            $("#header .head").css({display:"block"})
            $("#header").css({width:"1179px"});
     
       }

       if (st < 682) {
           $("#t .buto").css({position:"fixed"});
        } 
    });
    
    // 마우스 이벤트
   $("#header .menu li").mouseenter(function(){
    $(this).find(".fa-chevron-down").css({transform:"rotate(180deg)",transition:" 1s"});
      $(this).find(".m2").slideDown("fast");
      $(this).find(".m2").animate({display:"block"})
    });
   $("#header .menu li").mouseleave(function(){
    $(this).find(".fa-chevron-down").stop(2000).css({transform:"rotate(0deg)",transition:"all 1s ease 2s"});
    $(this).find(".m2").delay(2000).slideUp("slow");
    $(this).find(".m2").animate({display:"none"})
    
    });
    
    var ww = $(window).innerWidth();

    // 모바일
    if (ww<1200){
        // 모바일메뉴
        var menu_bu =1;
        $("#m_header .head_left>.fa-bars").click(function(){
               if(menu_bu==1){
                   $(this).css({transform:"rotate(180deg)",transition:"1s"});
                   $(".m_menu").delay(1000).stop().animate({left:0});
                   $(this).stop().attr({class:"fas fa-arrow-right"});
                   menu_bu = 0;
               } else {
                $(this).css({transform:"rotate(-180deg)",transition:"1s"});
                $(this).attr({class:"fas fa-bars"});
                $(".m_menu").stop().animate({left:-270});
                menu_bu = 1;
               }
        });
        $("#m_header .m_menu>li").click(function(){
            $(this).find(".m_m2").stop().slideToggle(300);
            $(this).find(".m_m2").animate({display:"block"});
          });
        var menu_ri_bu=1;
          $("#m_header .head_m .head_right>.fa-ellipsis-v").click(function(){
              if(menu_ri_bu==1){
                $("#m_header .m_head>div").stop().slideDown(300);
                $(this).css({transform:"rotate(180deg)",transition:"1s"});
                menu_ri_bu=0;
              } else {
                $("#m_header .m_head>div").stop().slideUp(300);
                $(this).css({transform:"rotate(-180deg)",transition:"1s"});
                menu_ri_bu=1;
              }
          });
       
    }
    

    
    
});


    