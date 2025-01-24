$(document).ready(function () {
    const breakpoint = 1280; // モバイルサイズの基準

    function initializeSlick(sliderClass, imageSelector) {
        // 画像の読み込みが完了した後に処理を行う
        $(imageSelector).each(function () {
            const imgElement = $(this);

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
                let centerPadding = (imageWidth / 2) + 20 + 'px'; // 画像の半分 + 20px

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
        if ($(window).width() <= breakpoint) {
            // Works スライダー
            initializeSlick('.slick_slides_works', '.slide_items_work img');

            // Florist スライダー
            initializeSlick('.slick_slides_florist', '.slide_items_florist img');
        } else {
            // スライダーを破棄
            if ($('.slick_slides_works').hasClass('slick-initialized')) {
                $('.slick_slides_works').slick('unslick');
            }
            if ($('.slick_slides_florist').hasClass('slick-initialized')) {
                $('.slick_slides_florist').slick('unslick');
            }
        }
    }

    // 初期化
    $(window).on('load', toggleDisplay); // 画像読み込み後に初期化
    $(window).resize(toggleDisplay); // リサイズ時にチェック
});
