const CACHE_NAME = "forma-pwa-v134";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./styles/01-inline-style-01.css", "./styles/02-inline-style-02.css", "./styles/03-inline-style-03.css", "./styles/04-inline-style-04.css", "./styles/05-inline-style-05.css", "./styles/06-inline-style-06.css", "./styles/07-inline-style-07.css", "./styles/08-inline-style-08.css", "./styles/09-inline-style-09.css", "./styles/10-inline-style-10.css", "./styles/11-inline-style-11.css", "./styles/12-inline-style-12.css", "./styles/13-inline-style-13.css", "./styles/14-inline-style-14.css", "./styles/15-inline-style-15.css", "./styles/16-inline-style-16.css", "./js/01-inline-script-01.js", "./js/02-inline-script-02.js", "./js/03-inline-script-03.js", "./js/04-inline-script-04.js", "./js/05-inline-script-05.js", "./js/06-inline-script-06.js", "./js/07-inline-script-07.js", "./js/08-inline-script-08.js", "./js/09-inline-script-09.js", "./js/10-inline-script-10.js", "./js/11-inline-script-11.js", "./js/12-inline-script-12.js", "./js/13-inline-script-13.js", "./js/14-inline-script-14.js", "./js/15-inline-script-15.js", "./js/16-inline-script-16.js", "./js/17-calorie-estimates.js"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(CORE))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(key => key.startsWith("forma-pwa-") && key !== CACHE_NAME).map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // HTML navigations are network-first so users receive updates; offline uses cached app shell.
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
      }
      return response;
    }).catch(() => caches.match("./index.html")));
    return;
  }

  // Other same-origin assets are network-first and only successful responses are cached.
  event.respondWith(fetch(request).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match(request).then(cached => cached || caches.match("./index.html"))));
});
