$(document).ready(function () {
    const breakpoint = 1024; // モバイルサイズの基準

    function toggleDisplay() {
        if ($(window).width() <= breakpoint) {

            $('.slick_slides_works').slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "230px",
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: false,
                infinite: true,
                speed: 500,
                draggable: true,
            });

            $('.slick_slides_florist').slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "170px",
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: false,
                infinite: true,
                speed: 500,
                draggable: true,
            });
        }
    }

    // 初期化
    toggleDisplay();

    // リサイズ時にチェック
    $(window).resize(toggleDisplay);
});
