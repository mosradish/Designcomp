$(document).ready(function () {
    const breakpoint = 1024; // モバイルサイズの基準
    let slickHidden = false;

    function toggleDisplay() {
        if ($(window).width() <= breakpoint && !slickHidden) {
            $('.slick_change').css('display', 'none');
            slickHidden = true;
            $('.slick_slide').slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "25%",
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                autoplay: false,
                infinite: true,
                speed: 500,
            });
        } else if ($(window).width() > breakpoint && slickHidden) {
            $('.slick_change').css('display', '');
            slickHidden = false;
        }
    }

    // 初期化
    toggleDisplay();

    // リサイズ時にチェック
    $(window).resize(toggleDisplay);
});
