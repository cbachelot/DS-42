importScripts('/js/polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ds42').then(function(cache) {
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
     ]);
   })
 );
});



self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    
    event.respondWith(
    
    caches.match(event.request).then(function(response) {
    
    return response || fetch(event.request);
    
    })
    
    );
    
    });