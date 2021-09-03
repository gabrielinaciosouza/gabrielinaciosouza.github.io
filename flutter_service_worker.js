'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d929129275a0ff210d8454b4e3fe94a3",
".git/config": "b29364263a1909975c7e8fd2e6e91b9b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8cdf2c01c968369ba8514de776e58183",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f42786cb7eb46b44238fd0a9b76c6b81",
".git/logs/refs/heads/main": "2da86826dd36d456ed6bcebbe90c9260",
".git/logs/refs/remotes/origin/main": "17a4439fd912c95019249f2809e53928",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/e24dfb33db3c57d8b752c463398345521fcdf6": "afa9c2d3b66fbd859f19afdb43f4db1f",
".git/objects/10/c7ed5d35961b33f621b96e3715ae4831af2d16": "2f217c047372ac4baf47b87295a2d212",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2c/5f325af12b5e11bec48b778934c355a1d982e1": "730d5f802ca8c356223e81be4521445d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/aefa6ebe89daa0a086d586b35313ad42ef96e7": "495e068c087cdf19637161c50f7bd622",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/ab3717c27cfa5bdec7de07c7ac600dfb8f997e": "8668feeed5d2a77725ca007866377f57",
".git/objects/54/78ada632ddd0fa83dd5e2b336f0906f5455540": "4ac0676d9d1dd42666c1c77ac6dec905",
".git/objects/54/fb3d02590c26afeb1c1f6ccffcd74e3afdfa1c": "bf7412ebf3a4e63fb7f8e5462b0edb7a",
".git/objects/69/eba675c92dd53ce765d4e3afe39f242fed2e2f": "68402c43da95c1903b02dfe77a1db4b4",
".git/objects/6b/a3ace75070ad6477344f2bb4bf6b48301f67b3": "a35bcd95abb467f707ec8f08f2ed9f44",
".git/objects/6c/9c085d305d3cf51001c06f2f196805d467afff": "5007f2d7d96889f9b2460f1d9c80db73",
".git/objects/6c/d0eec61be2267d98fde5f80bfe09238a70d3e6": "e111bb3913ebcc94008d1c44ac72990d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/3bf0d6d5bc6b98984cf211c2f0c5458768d5b7": "d4c886bc56af11c56b25928a1a69cede",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/26924f8d159af98183abe95f0e20f67953e502": "201241cf2c015a015533b764459f38dd",
".git/objects/af/aaab81dae13330469491f484eed67c82956899": "daf50a4fbb7351914819129bca5c2aaa",
".git/objects/b3/d0b852bfb295138816ab4ff05b9909732dc14d": "225bfa00e446711da2d9884ced3fdfe2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/157fec8a7728c254e01d88ecc553829ad4d867": "5e91ff745246aa7db29016a6de51075d",
".git/objects/cb/c6eda08767aec224f67b15fa4eac838987a2cf": "20c991f5a08117964273fcdc141f1023",
".git/objects/d3/46a12e537ca468536da6f496684e47485555b0": "228f0c2226bf525d417e6dc43eb7e74a",
".git/objects/e1/8bd31b19ba4a40054fb2ff4538f476124a29ee": "e90a56f54f05c326be6ed6c647c93570",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/1ff575f00147014da38eb8b2637827103f8e7b": "21eaa24d715ff4fb161617b29d697666",
".git/objects/e7/414878d7f8009da1725800201d144df0effd8f": "99c044932519539d3a9980dc617826ad",
".git/objects/e9/2844694081502f5bfb07940cb3843e42e753c1": "a86267c45ad41cd9b4be17fc3dc98555",
".git/objects/fa/53149f6ac342cee621127731cc5de420613e59": "e936014b94439ac202e738dd0bee7d15",
".git/objects/fb/b85ef8238c608b8c2051116925e6e4dbdc9565": "90ed048ed23da989cf92c1991d39e895",
".git/objects/fd/ad6bbf039dcb49cb544130bdd2f75f23e30998": "f46b034839975011962a6beefc6a402e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "7da0a5ac71489fead32f1299a221a025",
".git/refs/remotes/origin/main": "7da0a5ac71489fead32f1299a221a025",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "037316505f861a47b8a23efc1a81f485",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "06dfe10905d3c8bdca4ff2e8308c18fc",
"/": "06dfe10905d3c8bdca4ff2e8308c18fc",
"main.dart.js": "a690c573450764b99940cf96db915a33",
"manifest.json": "a30d74172f9a552bd1714b93781e6217",
"version.json": "66a32cb0632832969a362a44363acaa5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
