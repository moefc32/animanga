import { files, version } from '$service-worker';

const CACHE_NAME = `cache-v${version}`;
const PRECACHE_URLS = files;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>
            cache.addAll(PRECACHE_URLS)
        )
    );

    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.map((key) =>
                key !== CACHE_NAME && caches.delete(key)
            ))
        )
    );

    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);

    if (url.origin === self.location.origin) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) =>
                        cache.put(event.request, copy)
                    );
                    return response;
                })
                .catch(() => caches.match(event.request))
        );

        return;
    }
});
