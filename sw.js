let appCache;
//install for the service worker
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('appCache').then(function(cache){
      return cache.addAll([
        './',
        './css/',
        './data/',
        './img/',
        './js/',
        './index.html',
        './restaurant.html'
      ]);
    })
  );
});

// look for a match in the cache, if no results found go to the network
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response) return response;
      return fetch(event.request);
    })
  );
});
