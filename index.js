$(function () {
   
    // $("a[href='#']").click(function (e) {
    //     e.preventDefault();
    //     return false;
    //   }) 禁掉标签默认事件 如a的href跳转事件

    $('.nav a').click(function () {
        var winH=$(window).height();
        var target=$(this).attr('href');
        var finalH=0;
        switch(target){
case '#about':
    target=1;
     finalH=winH * target+16;
    break;

    case '#works':
    target=2;
     finalH=winH * target+32;
    break;

    case '#home':
    target=0;
     finalH=winH * target;
    break;

    case '#skill':
    target=3;
     finalH=winH * target+50;
    break;

    case '#contact':
    target=4;
     finalH=winH * target+64;
    break;


        }
        //可以在标签内设置好 date-index=“整型数值”，直接*就好，省去switch代码的判断赋值处理操作 ...并且此逻辑执行更加具有效率性
       
        $('body,html').animate({
            scrollTop: finalH
       
    },600,function(){})
    })

   
})