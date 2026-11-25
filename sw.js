const CACHE_NAME = "forma-pwa-v132";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png",
  "./styles/01-app-shell.css",
  "./styles/02-cardio-planning.css",
  "./styles/03-nutrition-planning.css",
  "./styles/04-file-library.css",
  "./styles/05-settings-layout.css",
  "./styles/06-settings-help-tour.css",
  "./styles/07-settings-navigation.css",
  "./js/01-account-profile-fallback.js",
  "./js/02-app-core.js",
  "./js/03-training-progress.js",
  "./js/04-cardio-progress-navigation.js",
  "./js/05-floating-timer.js",
  "./js/06-bioimpedance-import-preview.js",
  "./js/07-cardio-session-engine.js",
  "./js/08-weekly-cardio-plan.js",
  "./js/09-import-export-center.js",
  "./js/10-file-center-workflow.js",
  "./js/11-data-workflows.js",
  "./js/12-area-navigation.js",
  "./js/13-nutrition-planning.js",
  "./js/14-file-overlay-compatibility.js",
  "./js/15-settings-help-tour.js",
  "./js/16-settings-return-navigation.js"];

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
