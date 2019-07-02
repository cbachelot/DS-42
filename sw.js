const CACHE_NAME = '{%VERSION%}';

//ONLY EDIT THE sw.js FILE IN THE SCRIPTS FOLDER WITH {%VERSION%} AT THE TOP}

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


self.addEventListener('install', e => {
    // once the SW is installed, go ahead and fetch the resources
    // to make this work offline
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
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
                './js/slide-in-panel.js'
            ]).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('message', function (event) {
    if (event.data.msg === 'skipwaiting') {
        self.skipWaiting();
    }
});