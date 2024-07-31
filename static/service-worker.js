self.addEventListener('install', (event) => {
    self.skipWaiting(); // Activate the new service worker immediately
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName); // Clean up old caches
          })
        );
      })
    );
  });
  