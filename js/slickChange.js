$(document).ready(function () {
    const breakpoint = 1024; // モバイルサイズの基準

    function toggleDisplay() {
        if ($(window).width() <= breakpoint) {

            let imageWidth = $('.slick_slides_florist img').width(); // 画像の幅を取得
            let centerPadding = (imageWidth / 2) + 20 + 'px'; // 画像の半分 + 20px
            
            $('.slick_slides_works').slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: centerPadding,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: false,
                infinite: true,
                speed: 500,
                draggable: true,
            });

            imageWidth = $('.slick_slides_florist img').width(); // 画像の幅を取得
            centerPadding = (imageWidth / 2) + 20 + 'px'; // 画像の半分 + 20px

            $('.slick_slides_florist').slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: centerPadding,
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
