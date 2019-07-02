const cacheName = `cacheName`;
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [
            '/'
            //'/ds-component-buttons.html',
            //'/styles/alliedstyles.css',
            //'/styles/icon-style.css',
            //'/styles/slide-in-panel.css',
            //'/images/ds42-mast.svg',
            //'/scss/allied_variables.scss',
            //'/scss/allied_variables.css',
            //'/scss/ds-42.css',
            //'/scss/ds-42.scss',
            //'/scss/ds42_variables.css',
            //'/scss/ds42_variables.scss',
            //'/js/slide-in-panel.js',
            //'/nav.html'
          ]
        ).then(() => self.skipWaiting());
      })
    );
  });

  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(cacheName)
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => {
        return response || fetch(event.request);
      })
    );
  });