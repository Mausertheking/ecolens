// EcoLens service worker — caches the app shell for offline loading and
// enables install. The AI call (Supabase Edge Function) always goes to the network.
const CACHE = "ecolens-v21";
// Relative to the worker's own location, so this works both at a domain root
// and under GitHub Pages' /ecolens/ path.
const SHELL = [
  "./",
  "index.html",
  "styles.css",
  "fonts.css",
  "config.js",
  "vendor/supabase-2.110.0.js",
  "app.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-180.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  const url = new URL(request.url);
  // Only handle our own app shell. The API (Supabase) and map tiles, CDNs and
  // Overpass are cross-origin, so they're never cached.
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }
  // App shell: network-first so updates show immediately when online;
  // fall back to the cache (or index.html) only when offline.
  e.respondWith(
    fetch(request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(request, copy));
        return res;
      })
      .catch(() => caches.match(request).then((hit) => hit || caches.match("index.html")))
  );
});
