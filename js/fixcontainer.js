document.addEventListener("DOMContentLoaded", () => {
    const fixContainer = document.querySelector(".fix_container");
    const headerContainer = document.querySelector(".header_container");
    const menuBar = document.querySelector(".menu_bar");
    const fixTitle = document.querySelector(".fix_title");

    if (fixContainer && headerContainer && menuBar && fixTitle) {
        const headerHeight = headerContainer.offsetHeight;
        const initialTop = 40; // 初期の top 値（40px）
        const initialHeight = fixContainer.offsetHeight; // 初期の height 値
        const scrollRange = headerHeight; // top 値を減少させるスクロール範囲
        const link = fixTitle.querySelector("a"); // h2.fix_title 内の唯一のリンクを取得

        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;

            // fix_containerがheader_containerの高さを超えたらスタイルを変更
            if (scrollY > headerHeight) {
                fixContainer.style.backgroundColor = "white";
                fixTitle.style.color = "#333333";
                if (link) {
                    link.style.color = "#333333"; // リンクの色を変更
                }
                menuBar.classList.add("scroll");
                fixContainer.style.borderBottom = "3px solid #ccc";
            } else {
                fixContainer.style.backgroundColor = "";
                fixTitle.style.color = "";
                if (link) {
                    link.style.color = ""; // リンクの色を元に戻す
                }
                menuBar.classList.remove("scroll");
                fixContainer.style.borderBottom = "";
            }

            // top 値を計算して減少させる
            let newTop = initialTop - (scrollY / scrollRange) * initialTop;
            if (newTop < 0) newTop = 0; // 最小値を 0 に制限

            // height に top の減少分を足す
            const newHeight = initialHeight + (initialTop - newTop);

            // スタイルを適用
            fixContainer.style.top = `${newTop}px`;
            fixContainer.style.height = `${newHeight}px`;
        });
    }
});
