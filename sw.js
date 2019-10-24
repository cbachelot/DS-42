const cacheName = `1.5`;

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache
        .addAll([
          //'/',
          "/index.html",
          "/ds-component-buttons.html",
          "/styles/alliedstyle.css",
          "/styles/icon-style.css",
          "/styles/slide-in-panel.css",
          "/images/ds42-mast.svg",
          "/scss/allied_variables.scss",
          "/scss/allied_variables.css",
          "/scss/ds-42.css",
          "/scss/ds-42.scss",
          "/scss/ds42_variables.css",
          "/scss/ds42_variables.scss",
          "/js/slide-in-panel.js",
          "/nav.html"
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener("message", function(event) {
  if (event.data.msg === "skipwaiting") {
    self.skipWaiting();
  }
});

// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js");
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "xxxxxxxxx" // 4. Get Firebase Configuration
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
