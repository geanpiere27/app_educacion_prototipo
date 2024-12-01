self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/login',
                '/register',
                '/dashboard',
                '/static/css/styles.css',
                '/static/js/scripts.js',
                '/static/images/icon-192x192.png',
                '/static/images/icon-512x512.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});