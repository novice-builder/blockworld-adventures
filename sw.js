/* BlockWorld Adventures — site-scoped offline shell, sourced from verified Run 3. */
const PREFIX = 'bw2:development:' + encodeURIComponent(self.registration.scope) + ':';
const CACHE = PREFIX + "adventures-r3-7bc2f55223fd5688";
const FILES = ["./","./index.html","./manifest.webmanifest","./release.json","./icon-180.png","./icon-192.png","./icon-512.png"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'BW2_ACTIVATE') self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.href.startsWith(self.registration.scope) || url.origin !== self.location.origin) return;
  // Do not rewrite or cache navigations belonging to independently hosted previews.
  // Each preview has its own URL and storage; the Run 3 root app remains unchanged.
  if (url.pathname.startsWith(new URL('preview-02/', self.registration.scope).pathname)) return;
  const path = './' + url.pathname.slice(new URL(self.registration.scope).pathname.length);
  if (!FILES.includes(path) && event.request.mode !== 'navigate') return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request);
    if (cached) return cached;
    if (event.request.mode === 'navigate') {
      const home = await cache.match(new URL('index.html', self.registration.scope).href);
      if (home) return home;
    }
    return fetch(event.request);
  })());
});
