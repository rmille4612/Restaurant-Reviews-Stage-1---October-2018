self.addEventListener('install', function(event) {            //Service Worker for Offline Content
    event.waitUntil(
        caches.open('restaurantCache'.then(function(cache) {  //Declaration of items to cache for offline useage
            return cache.addAll([
                './',
                './index.html',
                './restaurant.html',
                './css/styles.css',
                './data/restaurants.json',
                './js/dbhelper.js',
                './js/main.js',
                './js/restaurant_info.js',
                './img/1.jpg',
                './img/2.jpg',
                './img/3.jpg',
                './img/4.jpg',
                './img/5.jpg',
                './img/6.jpg',
                './img/7.jpg',
                './img/8.jpg',
                './img/9.jpg',
                './img/10.jpg'
            ]);
        }))
    );
});

self.addEventListener('fetch', function(event) {         //Code used to deliver cached content if a fetch request is made
    event.respondWith(
      caches.match(event.request).then(function(resp) {
        return resp || fetch(event.request).then(function(response) {
          return caches.open('restaurantCache').then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });