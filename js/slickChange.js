$(document).ready(function () {
    const breakpoint = 1024; // モバイルサイズの基準
    let slickHidden = false;

    function toggleDisplay() {
        if ($(window).width() <= breakpoint && !slickHidden) {
            $('.slick_change').css('display', 'none'); // 非表示に設定
            slickHidden = true;
        } else if ($(window).width() > breakpoint && slickHidden) {
            $('.slick_change').css('display', ''); // デフォルト表示に戻す
            slickHidden = false;
        }
    }

    // 初期化
    toggleDisplay();

    // リサイズ時にチェック
    $(window).resize(toggleDisplay);
});
