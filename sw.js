self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [
            './index.html',
            './ds-component-buttons.html',
            './styles/alliedstyles.css',
            './styles/icon-style.css',
            './styles/slide-in-panel.css',
            './images/ds42-mast.svg',
            './scss/allied_variables.scss',
            './scss/allied_variables.css',
            './scss/ds-42.css',
            './scss/ds-42.scss',
            './scss/ds42_variables.css',
            './scss/ds42_variables.scss',
            './js/slide-in-panel.js',
            './nav.html'
          ]
        );
      })
    );
  });