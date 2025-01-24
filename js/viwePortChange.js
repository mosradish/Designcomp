function adjustViewport() {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 1280) {
      if (!viewportMeta) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1';
        document.head.appendChild(meta);
      } else {
        viewportMeta.setAttribute('content', 'width=1280, initial-scale=1');
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
  