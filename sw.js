const CACHE_NAME = "zinkone-app-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./logo.png",
  "./red-label.jpg",
  "./jack-daniel.jpg",
  "./double-black.jpg",
  "./ricard.jpg",
  "./black-label.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("Cache ouvert");
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
