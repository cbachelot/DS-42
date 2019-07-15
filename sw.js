  self.addEventListener('install', e => {
    // once the SW is installed, go ahead and fetch the resources
    // to make this work offline
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
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
            ]).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('message', function (event) {
    if (event.data.msg === 'skipwaiting') {
        self.skipWaiting();
    }
});