const CACHE = "ferns-das-pwa-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/js/app.js",
    "/manifest.json",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});