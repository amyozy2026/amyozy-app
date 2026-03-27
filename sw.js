const CACHE = 'amyozy-v1';
const FILES = ['/amyozy-app/', '/amyozy-app/index.html', '/amyozy-app/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
