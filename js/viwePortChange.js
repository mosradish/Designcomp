function adjustViewport() {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 240) {
      if (!viewportMeta) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=240, initial-scale=1';
        document.head.appendChild(meta);
      } else {
        viewportMeta.setAttribute('content', 'width=250, initial-scale=1');
      }
    } else {
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');
      }
    }
  }
  
  // 初期設定
  adjustViewport();
  
  // 画面サイズが変わるたびに再チェック
  window.addEventListener('resize', adjustViewport);
  