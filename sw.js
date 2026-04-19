const CACHE_NAME = "flag-game-pwa-v26";
const APP_VERSION = "20260419-autoupdate2";

const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260419-autoupdate2",
  "./app.js?v=20260419-autoupdate2",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-maskable.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
      .then(() => self.clients.claim())
      .then(() => refreshOpenClients())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (event.data && event.data.type === "REFRESH_CLIENTS") {
    event.waitUntil(refreshOpenClients());
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(new Request(event.request, { cache: "reload" }))
        .then((response) => {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", responseCopy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  if (requestUrl.pathname.endsWith("/version.js")) {
    event.respondWith(fetch(new Request(event.request, { cache: "reload" })));
    return;
  }

  event.respondWith(
    fetch(new Request(event.request, { cache: "reload" }))
      .then((response) => {
        const responseCopy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

function refreshOpenClients() {
  return self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
    return Promise.all(clients.map((client) => {
      const clientUrl = new URL(client.url);
      if (clientUrl.origin !== self.location.origin) {
        return Promise.resolve();
      }

      if (clientUrl.searchParams.get("app-version") === APP_VERSION) {
        return client.postMessage({ type: "APP_UPDATED", version: APP_VERSION });
      }

      clientUrl.searchParams.set("app-version", APP_VERSION);
      return client.navigate(clientUrl.href);
    }));
  });
}
