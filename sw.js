const cacheName = 'taiping-v1';
const assets = [
  './',
  './google.html',
  './google.css',
  './google.js',
  './ch.png',
  './manifest.json'
];

// تثبيت الـ Service Worker وحفظ الملفات في الكاش
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// استدعاء الملفات من الكاش عند عدم وجود إنترنت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
