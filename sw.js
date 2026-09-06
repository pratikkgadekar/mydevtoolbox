/* sw.js - Service Worker Cache v40 */
const CACHE_NAME = 'mdt-cache-v40';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/tools-part-1.js',
  './js/tools-part-2.js',
  './js/tools.js',
  './js/core.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
