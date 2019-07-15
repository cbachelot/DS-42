const cacheName = `cacheName`;

self.addEventListener('activate', function (event) {
  event.waitUntil(
      caches.keys().then(function (cacheNames) {

          return Promise.all(
              cacheNames.map(function (cacheName) {
                  if (CACHE_NAME !== cacheName) {
                      return caches.delete(cacheName);
                  }
              })
          );
      })
  );
});

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [
            '/',
            '/index.html',
            '/ds-component-buttons.html',
            '/styles/alliedstyle.css',
            '/styles/icon-style.css',
            '/styles/slide-in-panel.css',
            '/images/ds42-mast.svg',
            '/scss/allied_variables.scss',
            '/scss/allied_variables.css',
            '/scss/ds-42.css',
            '/scss/ds-42.scss',
            '/scss/ds42_variables.css',
            '/scss/ds42_variables.scss',
            '/js/slide-in-panel.js',
            '/nav.html'
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

  self.addEventListener('message', function (event) {
    if (event.data.msg === 'skipwaiting') {
        self.skipWaiting();
    }
});