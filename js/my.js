$(function () {
    var num=0;
    var timer=null;
    $('.page').eq(0).removeClass('active')
    $(window).mousewheel(function (e) {
        clearTimeout(timer);
        timer=setTimeout(function () {
            num=num-e.deltaY;
            if(num>=$('.page').length||num<0){
                num=0
            }
            play()
        },500)
    })
    $('nav span').click(function () {
        num=$(this).index()
        play()
    })
    function play() {
        if(num==0){
            $('.head').css('visibility','hidden')
        }else{
            $('.head').css('visibility','visible')
        }
        $('.page').eq(num).show().siblings('.page').hide();
        $('nav span').eq(num).addClass('active').siblings().removeClass();
        setTimeout(function () {
            $('.page').eq(num).removeClass('active').siblings().addClass('active')
        },10)
    }




})