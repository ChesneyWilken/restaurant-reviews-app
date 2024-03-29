//install for the service worker
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('app-v1').then(function(cache){
      return cache.addAll([
        './',
        './css/styles.css',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './index.html',
        './restaurant.html',
      ]);
    })
  );
});

// get files from cache - look for a match in the cache, if no results found go to the network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(response) {
        return caches.open('app-v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
