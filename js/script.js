$(function() {
    $(".block-salon-area").click(function() {
        $(this).next("ul").slideToggle("fast");
    });
    $(".block-salon-pref").click(function() {
        $(this).next(".block-salon-muni").slideToggle("fast");
    });
    $(".block-salon-detail").click(function() {
        $(this).next(".block-salon-info").slideToggle("fast");
    });
    $(".filter__head").click(function() {
        $(this).next(".filter__wrapper").slideToggle("fast");
    });
});
$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダーの高さを取得
        var header = $('header').height();
        //ヘッダーの高さを引く
        var position = target.offset().top - header * 2;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});
$(function() {
    $(".header__open").click(function() {
        $(".resHeader").toggleClass("slidedown");

        $(this).toggleClass("close");
        $(".resHeader__close").toggleClass("open");
    });
    $(".resHeader__close").click(function() {
        $(".resHeader").toggleClass("slidedown");
        $(this).toggleClass("open");
        $(this).removeClass("close");
        $(".header__open").toggleClass("close");
    })
    $(".resHeader__link").click(function() {
        $(".resHeader").removeClass("slidedown");
        $(".resHeader__close").toggleClass("open");
        $(".resHeader__close").removeClass("close");
        $(".header__open").toggleClass("close");
    })
});
$(function() {
    $(".hamburger").click(function() {
        $(".hamburger").toggleClass("change");
        //$(".sidecolumnContainer").toggleClass("showSideColumn");
        $(".sidecolumnContainer").addClass("showSideColumn");

        if ($(window).width() > 375)
            $(".sidecolumnContainer").css({ bottom: "1%", right: "1%" });
        else
            $(".sidecolumnContainer").css({ bottom: "0", right: "0" });

        if ($(".hamburger").hasClass("change")) {
            $(".sidecolumnContainer").animate({ opacity: "1" });
        } else {
            $(".sidecolumnContainer").animate({ opacity: "0" });
        }
    });
});
$(function() {
    win_wdth = $(window).width();
    header_wdth = $('.header').width();
    side_wdth = $('.sidecolumnContainer').width();
    left_pos = win_wdth / 2 + header_wdth / 2 - side_wdth - 8.7;

    if ($(window).width() >= 1138)
        $('.sidecolumnContainer').css({ 'left': left_pos, 'top': 0 });
    else
        $('.sidecolumnContainer').removeAttr('style');


    $(window).on('resize', function() {
        win_wdth = $(window).width();
        header_wdth = $('.header').width();
        side_wdth = $('.sidecolumnContainer').width();
        left_pos = win_wdth / 2 + header_wdth / 2 - side_wdth - 8.7;

        if ($(window).width() >= 1138)
            $('.sidecolumnContainer').css({ 'left': left_pos, 'top': 0 });
        else
            $('.sidecolumnContainer').removeAttr('style');


    });


    // ヘッダーを取得
    const header = document.getElementById("header");
    // ヘッダーの高さを取得
    const hH = header.clientHeight;
    // ウィンドウの高さを取得
    const winH = window.innerHeight;
    // ページの高さを取得
    const docH = document.documentElement.scrollHeight;
    // ウィンドウが最下部達した場合のウィンドウ上部の位置を取得
    const windBtm = docH - winH;

    // 現在地を示す変数を定義
    let pos = 0;
    // スクロール直前の位置を示す変数を定義
    let lastPos = 0;

    let check_sidePos = false;
    const onScroll = () => {
        if (pos > hH && pos > lastPos) {
            header.classList.add("header--unpinned");
            if ($(window).width() >= 1138 && $('header').hasClass("header--unpinned") && !check_sidePos) {
                $('.sidecolumnContainer').animate({ top: $('header').height() * (-1) });
                check_sidePos = true;
            }
        }
        // スクロール位置がヘッダーの高さ分より小さいか
        // またはスクロール位置が最後のスクロール位置より小さい場合はclass名を削除
        if (pos < hH || pos < lastPos || windBtm <= pos) {
            header.classList.remove("header--unpinned");
            if ($(window).width() >= 1138 && !$('header').hasClass("header--unpinned") && check_sidePos) {
                $('.sidecolumnContainer').animate({ top: "0" });
                check_sidePos = false;
            }
        }

        // 最後のスクロール位置を保存
        lastPos = pos;
    };

    window.addEventListener("scroll", () => {
        // スクロールするごとにpos（現在地）の値を更新
        pos = window.scrollY;
        onScroll();
    });
});