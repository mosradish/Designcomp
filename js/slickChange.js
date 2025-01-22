$(document).ready(function () {
    const breakpoint = 1024; // モバイルサイズの基準
    let slickHidden = false;

    function toggleDisplay() {
        if ($(window).width() <= breakpoint && !slickHidden) {
            $('.slick_change').css('display', 'none');
            slickHidden = true;
            $('.slick_slides_works').slick({
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

            $('.slick_slides_florist').slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "30%",
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
