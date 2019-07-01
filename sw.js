self.addEventListener('install', function(event) {
    // Perform install steps
    var CACHE_NAME = 'ds-42-cache-v1';
    var urlsToCache = [
        './',
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
    ];

    self.addEventListener('install', function(event) {
      // Perform install steps
        event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
    });
});
