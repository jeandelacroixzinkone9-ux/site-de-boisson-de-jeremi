const CACHE_NAME = 'boutique-cache-v1';
const urlsToCache = [
  'index.html',
  'red-label.jpg',
  'jack-daniel.jpg',
  'double-black.jpg',
  'ricard.jpg',
  'black-label.jpg',
  'logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
