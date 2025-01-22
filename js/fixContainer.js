document.addEventListener("DOMContentLoaded", () => {
    const fixContainer = document.querySelector(".fix_container");
    const headerContainer = document.querySelector(".header_container");
    const menuBar = document.querySelector(".menu_bar");
    const fixTitle = document.querySelector(".fix_title");
    const menuBtn = document.getElementById("menu_btn");
    const globalMenu = document.querySelector(".global");
    const links = document.querySelectorAll('a[href^="#"]');

    if (fixContainer && headerContainer && menuBar && fixTitle) {
        const headerHeight = headerContainer.offsetHeight;
        const initialTop = 40; // 初期の top 値（40px）
        const initialHeight = fixContainer.offsetHeight; // 初期の height 値
        const scrollRange = headerHeight; // top 値を減少させるスクロール範囲
        const link = fixTitle.querySelector("a"); // h2.fix_title 内の唯一のリンクを取得

        // スクロールイベント
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;

            // top 値を計算して減少させる
            let newTop = initialTop - (scrollY / scrollRange) * initialTop;
            if (newTop < 0) newTop = 0; // 最小値を 0 に制限

            // height に top の減少分を足す
            const newHeight = initialHeight + (initialTop - newTop);
            // スタイルを適用
            fixContainer.style.top = `${newTop}px`;
            fixContainer.style.height = `${newHeight}px`;

            // fix_containerがheader_containerの高さを超えたらスタイルを変更
            if (scrollY > headerHeight - newHeight) {
                fixContainer.style.top = 0;
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

            
        });

        // スムーズスクロールとメニュークラスのトグル
        links.forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault(); // デフォルトの動作を無効化

                // 対象の要素を取得
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // fixContainer の高さを取得 (getBoundingClientRect() で実際の高さを取得)
                    const fixContainerHeight = fixContainer.getBoundingClientRect().height;
                    
                    // targetElement の位置を取得
                    const targetOffsetTop = targetElement.getBoundingClientRect().top + window.scrollY;

                    // #concept がクリックされた場合のみ -40 のオフセットを適用
                    const offset = targetId === "#concept" ? 40 : 80;

                    // fixContainer の高さ分を引いて調整したスクロール位置を計算
                    const adjustedOffsetTop = targetOffsetTop - fixContainerHeight - offset;

                    // 手動でスクロール位置を調整
                    window.scrollTo({
                        top: adjustedOffsetTop,
                        behavior: "smooth"
                    });
                }

                // メニューのトグル
                if (menuBtn && globalMenu) {
                    menuBtn.classList.remove("open");
                    globalMenu.classList.remove("open");
                }
            });
        });

        // メニューボタンのクリックイベント
        if (menuBtn && globalMenu) {
            menuBtn.addEventListener("click", () => {
                // クラスを切り替えてスタイルを変更
                menuBtn.classList.toggle("open");
                globalMenu.classList.toggle("open");
            });
        }
    }
});
