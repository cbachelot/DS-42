self.addEventListener('install', function(event) {
    // Perform install steps
    var CACHE_NAME = 'ds-42-cache-v1';
    var urlsToCache = [
        './',
        './css/ds42styles.css',
        './js/playground-app.js',
        './images/42-ph-logo.svg',
        './images/ds42-mast.svg',
        './Home/Components',
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
