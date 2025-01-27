$(document).ready(function () {
    const breakpoint = 1024; // モバイルサイズの基準

    function initializeSlick(sliderClass, imageSelector) {
        // 画像の読み込みが完了した後に処理を行う
        $(imageSelector).each(function () {
            const imgElement = $(this);

            // ビューポート幅を取得
            const viewportWidth = $(window).width();
            const vwToPx = viewportWidth * 0.02; // 2vw をピクセル単位に変換
            
            // 画像の読み込みを確認
            if (!imgElement[0].complete) {
                imgElement.on('load', function () {
                    initSlider();
                });
            } else {
                initSlider(); // すでにロードされている場合
            }

            function initSlider() {
                let imageWidth = imgElement.width(); // 画像の幅を取得
                const centerPadding = (imageWidth / 2) + (viewportWidth / 100) + 'px';

                if ($(sliderClass).length && !$(sliderClass).hasClass('slick-initialized')) {
                    $(sliderClass).slick({
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: centerPadding,
                        variableWidth: true,
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
        });
    }

    function toggleDisplay() {
        const viewportWidth = $(window).width();

        // `worksWidth` と `floristWidth` をリサイズ時に計算
        const worksWidth = $('.slick_slides_work').width();
        const floristWidth = $('.slick_slides_florist').width();

        if (viewportWidth <= breakpoint) {
            // Works スライダー
            $('.slide_items_work').width(worksWidth);
            $('.slide_items_work').css('max-width', worksWidth + 'px');
            initializeSlick('.slick_slides_work', '.slide_items_work img');

            // Florist スライダー
            $('.slide_items_florist').width(floristWidth);
            $('.slide_items_florist').css('max-width', floristWidth + 'px');
            initializeSlick('.slick_slides_florist', '.slide_items_florist img');
        } else {
            // スライダーを破棄
            if ($('.slick_slides_work').hasClass('slick-initialized')) {
                $('.slick_slides_work').slick('unslick');
            }
            if ($('.slick_slides_florist').hasClass('slick-initialized')) {
                $('.slick_slides_florist').slick('unslick');
            }
        }
    }

    // 初期化
    $(window).on('load', toggleDisplay);
    $(window).resize(toggleDisplay);
});
