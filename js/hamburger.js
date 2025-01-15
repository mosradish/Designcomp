document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu_btn');
    const globalMenu = document.querySelector('.global');

    menuBtn.addEventListener('click', () => {
        // クラスを切り替えてスタイルを変更
        menuBtn.classList.toggle('open');
        globalMenu.classList.toggle('open');
    });
});