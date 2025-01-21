$(document).ready(function () {
    const breakpoint = 1024; // モバイルサイズの基準
    let slickInitialized = false;

    function initializeSlick() {
        if ($(window).width() <= breakpoint && !slickInitialized) {
            $('.slick_change').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            });
            slickInitialized = true;
        } else if ($(window).width() > breakpoint && slickInitialized) {
            $('.slick_change').slick('unslick'); // スライダー解除
            slickInitialized = false;
        }
    }

    // 初期化
    initializeSlick();

    // リサイズ時にチェック
    $(window).resize(initializeSlick);
});