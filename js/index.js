/**
 * Created by hxsd on 2016/6/23.
 */
$(function () {
    var $lis = $(".nav-first");
    $lis.hover(function () {
        $(this).children("ul").stop();
        $(this).children("ul").slideDown();
    },function () {
        $(this).children("ul").stop();
        $(this).children("ul").slideUp();
    });

    var $images = $(".banner-pic").children("img");

    var count = 0;
    var imgNumber = $images.length;

    function showImg() {
        $($images[count]).fadeOut(500);
        if(count == imgNumber-1){
            count = -1;
        }
        count ++;
        $($images[count]).fadeIn(500);
    }
    
    var timerId = setInterval(showImg,2000);

    $images.hover(function () {
        clearInterval(timerId)
    },function () {
        timerId = setInterval(showImg,2000);
    });
    
    var $BigPics = $("#big_pic").children("img");
    var $littlePics = $("#little_pic_list img");
    var $BtnL = $("#btn-left");
    var $BtnR = $("#btn-right");
    var index = 0;

    $($BigPics[index]).fadeIn();
    $($littlePics[index]).addClass("show-border");

    $($BigPics[index]).siblings("img").fadeOut();
    /*$($littlePics[index]).siblings("img").removeClass("show-border");*/

    $BtnR.click(function () {
        $($BigPics[index]).fadeOut();
        $($littlePics[index]).removeClass("show-border");
        if(index == $BigPics.length-1){
            index = -1;
        }
        index++;
        $($BigPics[index]).fadeIn();
        $($littlePics[index]).addClass("show-border");

    });
    $BtnL.click(function () {
        $($BigPics[index]).fadeOut();
        $($littlePics[index]).removeClass("show-border");
        if(index == 0){
            index = $BigPics.length;
        }
        index--;
        $($BigPics[index]).fadeIn();
        $($littlePics[index]).addClass("show-border");
    });

    $littlePics.click(function () {
        index = $littlePics.index($(this));

        $($BigPics[index]).siblings("img").fadeOut();
        $($BigPics[index]).fadeIn();

        $($littlePics[index]).addClass("show-border");

        $littlePics.each(function (i, dom) {
            if(i != index){
                $(dom).removeClass("show-border");
            }
        })

    })



});

