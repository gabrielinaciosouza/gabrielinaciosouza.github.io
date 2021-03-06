'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2f140b783fe4870a12c1ae43dd48188d",
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
".git/index": "7a16778e1c4009e6aa9706a1f3e6dd02",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "57fefe70acc80953626eccd2f293c295",
".git/logs/refs/heads/main": "01a36c395a3512a3ca833f940196a737",
".git/logs/refs/remotes/origin/main": "4ec17f034bfb104e852415c96148dba6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/4bfaf28965b6a9ca7c75b502c02993578fd87e": "aef5eeaa6a3a46e6bd1396877305254a",
".git/objects/09/e24dfb33db3c57d8b752c463398345521fcdf6": "afa9c2d3b66fbd859f19afdb43f4db1f",
".git/objects/10/c7ed5d35961b33f621b96e3715ae4831af2d16": "2f217c047372ac4baf47b87295a2d212",
".git/objects/13/822d23b6efc48187e5d5a398f03013fb172b67": "d1bd2c8f062003577d98062ee5fea74e",
".git/objects/16/8da50380d2522ad5062b9811ecfd6d6c3408d6": "4ba73cb75517adaf8294e3e6e0c67e86",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2c/5f325af12b5e11bec48b778934c355a1d982e1": "730d5f802ca8c356223e81be4521445d",
".git/objects/2c/ea37c5853204e34d5cdab8fd6bb92c030d92a2": "5dc0c874229e66e3eb7b087930c4fa2a",
".git/objects/2e/8418dafa83be80ad9ae6aa9917350683a62f78": "a4f5c464a656f50e6de347b37d340380",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/67d4ee5698bbb893d0ec78d26dba6f4f0997d3": "2486044a6aaf2574711404db353cdb7e",
".git/objects/37/53ab959a0c40de871f2920e806046de0b14c2a": "6257989a997df70c700353e30c1e1266",
".git/objects/3a/a5d223b29dba3a71ad3732e89325b6cf8f21b7": "99b9ec3a578f072fb353cfcc32972175",
".git/objects/3c/aefa6ebe89daa0a086d586b35313ad42ef96e7": "495e068c087cdf19637161c50f7bd622",
".git/objects/3e/2507d612d4c523bbe9774618721f0e975b6eee": "88f35bb1c6d43f8f77f10a224aa2c4bc",
".git/objects/42/0d1cde3cedfc96246827ab148f9fa8d0b771d6": "e3d80412b26f8a919145a1e90e14b754",
".git/objects/44/176771f27153945276170837f7a4b60c3422c7": "db6f2827a1000be8d6a0876a55b3df6f",
".git/objects/44/b34c9f5e34b0b2739e4a1185652e16c4c143c9": "46b87e6d001e17a23626e708f1199280",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/ca27f66842ff111cf8a5bf0205ff34296b5af7": "d596a4ce3441b56a755299ecdf48adc8",
".git/objects/4b/d28a9d3891857a19bd6dbe19df7ec2bdeb686d": "bfe9cf2f30ee9250895a74411b348b6f",
".git/objects/4c/ab3717c27cfa5bdec7de07c7ac600dfb8f997e": "8668feeed5d2a77725ca007866377f57",
".git/objects/51/90c175e157175c404834f7084bd352b961f7b2": "c0e1e82cad80cc284bade5dd4a96ce5d",
".git/objects/53/8c483cf927fdae3563ff90e1948e1e6d0e50ec": "38b1e51b43618170e3d5518d813ce109",
".git/objects/54/78ada632ddd0fa83dd5e2b336f0906f5455540": "4ac0676d9d1dd42666c1c77ac6dec905",
".git/objects/54/832d51d1da9fbdc38ba2ddc54640330174aa82": "2a8a3c050b5891b4684be8a3b358429e",
".git/objects/54/fb3d02590c26afeb1c1f6ccffcd74e3afdfa1c": "bf7412ebf3a4e63fb7f8e5462b0edb7a",
".git/objects/57/48ec66d6e9dc3b73c4e7cb8640bfe786b3fe88": "d54df38c188704edaf1830531628d844",
".git/objects/60/28dab3550f7d6f5d3b1c83172fc6436e89a813": "af623bf4dea4952552105718d500bacd",
".git/objects/61/931829e6c0d4f23f3ab9a2daedc42a01c728df": "99a1b0ae20749aef5039568fef2dee53",
".git/objects/61/fac611912d5f265e6623ca3235b0944142d37d": "25321de974ae3b4e9eaf7cad11b51b14",
".git/objects/67/8800205eb38f9a8c177ea11f71805756406247": "a2d6f16515eca5f5a1908f1bd5d2babd",
".git/objects/69/eba675c92dd53ce765d4e3afe39f242fed2e2f": "68402c43da95c1903b02dfe77a1db4b4",
".git/objects/6b/a3ace75070ad6477344f2bb4bf6b48301f67b3": "a35bcd95abb467f707ec8f08f2ed9f44",
".git/objects/6b/d9584779dff789fe02be4dc8958d9cfb8fd557": "e5cb6942872155d383e118570de4c412",
".git/objects/6c/9c085d305d3cf51001c06f2f196805d467afff": "5007f2d7d96889f9b2460f1d9c80db73",
".git/objects/6c/d0eec61be2267d98fde5f80bfe09238a70d3e6": "e111bb3913ebcc94008d1c44ac72990d",
".git/objects/6e/00edd7a4ea9ffd87fc92a9f1c9d71c394e0101": "708c6ace527cc92f506c1fb989967421",
".git/objects/6f/0978965d604891ab89a579c146944b55666df9": "8ff7d541f71b19179bf9286f2c782d55",
".git/objects/71/6f4cefcec2b2fb1dc7800dd3829afb09d9be84": "ba2bc9549103c4e266283bcefa28deb5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ea7f4fd84c8a584c1ddc108cb224ce46b0b6e5": "5f0a9e70563fdbffd8ff9c253e40c169",
".git/objects/80/0a37299276a6818ed8083827790f03b9576e5e": "755aaf9aad004cc98dce57562abb401f",
".git/objects/83/b2ddf669758d0056cb8016b99a0f650b72a861": "fe248259b3e3f2b8fa8c633e09457344",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/03fb71c6137825dd3bffb8318ea6fccda15b57": "bf90e55c37c8cd9710985e2f3a8dbe34",
".git/objects/99/3bf0d6d5bc6b98984cf211c2f0c5458768d5b7": "d4c886bc56af11c56b25928a1a69cede",
".git/objects/99/922ba60a67585d96f5c8192693a8f70c9a4b4b": "095667f3e046d29cb644744ffe880e45",
".git/objects/a0/477006f4c2e0f230422921468a9aac366b25ec": "a4593ece6be669d5da9ed2848212fab4",
".git/objects/a0/96b316b4e696c73eab1b4087fb6de0c134aff0": "ab0a029673bb7c4d81e42c3097f9d698",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/5c9ab4c65ea50407e4d2040a13142f32cbea77": "dd98d01df5afec7a6c41b42743233ee2",
".git/objects/a4/d2f567ba17a961d1524265e7e3315119964a50": "ffad8b6a21b25f6a602c236aabd9376d",
".git/objects/a6/c43ee98773d8f026f188330540827d0fe26301": "2f931e77aaa525bff0aa56e53ee9c488",
".git/objects/a7/ac218d876e9b40268b747ae9fd7039de2e60d8": "dc157e6a86d41e6bd976b905665b3b43",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/26924f8d159af98183abe95f0e20f67953e502": "201241cf2c015a015533b764459f38dd",
".git/objects/ac/7fdba8c113c386b745c1a7c8ccb8196ee18a66": "5c705bb68873a4183085969bfe09644e",
".git/objects/af/0d93f26a83b440585a732673ef1f915f7bf7fb": "8c90a5063919fbfa7812da4774539ad9",
".git/objects/af/50b739aeb1c6302caca56f190ddb161b7b3744": "ef3ad03cd9a2df0317bd021779c1de1d",
".git/objects/af/aaab81dae13330469491f484eed67c82956899": "daf50a4fbb7351914819129bca5c2aaa",
".git/objects/b2/84f1df36dde0407e827de0b3c586acb26843b9": "1d786b81abfb9729fe09fd3c540d6baf",
".git/objects/b3/d0b852bfb295138816ab4ff05b9909732dc14d": "225bfa00e446711da2d9884ced3fdfe2",
".git/objects/b3/dfe11cfff79835aaf312f195082e118d1260c9": "d42f5188e9bbf5e28a91a95b30410d27",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/1ba7f6d954a2d075d63c916f81b38488184b48": "846fc210ebb7e5ed5c195b6a3aafee03",
".git/objects/be/688c867adfd4b2b21404bb9c664dea71ec86a8": "6ed1590d04392ed779d5a3d2b554db46",
".git/objects/bf/157fec8a7728c254e01d88ecc553829ad4d867": "5e91ff745246aa7db29016a6de51075d",
".git/objects/c8/3c8a3ec220bfc662d7beee42378e8e2f96d832": "83764881817bd258729dd45a108dec9e",
".git/objects/c8/98f094a61d73047f319f1aabe3d5b493dc0ca9": "d04fe6928c7f2473ce1126ebdad74101",
".git/objects/c9/4751977bc0c102ba396100f9a33021029bd85a": "3448a00245bdbd119fdd1a4a29068ff7",
".git/objects/ca/b07b6ed663238927029d7bee8c0a60279b58d0": "a9176dbdaf38f0bd414ea1b5399b4d90",
".git/objects/cb/c6eda08767aec224f67b15fa4eac838987a2cf": "20c991f5a08117964273fcdc141f1023",
".git/objects/d0/f54b96dfa098723e4fb9ad3c350bbfe86ed3b2": "f4fb207cafa428131768779643af80b5",
".git/objects/d3/46a12e537ca468536da6f496684e47485555b0": "228f0c2226bf525d417e6dc43eb7e74a",
".git/objects/da/4dd4768b58fc950bef95c8c05ed79212686fd9": "538bcc73f1c0038f984d558ddbe9ae74",
".git/objects/dc/3d98f1b3712207de9b2d39d9dcb9e32ccd612e": "e95cf7ff21ef733bb1241c0b04c28389",
".git/objects/dd/6aa6e5e2404f30438c18f856ffce3c4dbe083a": "20ff594ef5d19f420e2b493f7c8a5223",
".git/objects/df/2f0ae42bb31c6bb59b9f84195876767c36b123": "681b107bec425079ac4f4aed9cd5d9ad",
".git/objects/e1/8bd31b19ba4a40054fb2ff4538f476124a29ee": "e90a56f54f05c326be6ed6c647c93570",
".git/objects/e2/61aff9e12e83401568b12ca8abeebce30da290": "1f4ed075c0eae66ecaaba1b1c5caab6f",
".git/objects/e3/9692780eb63f7820e4fd534292ef3e2f36f0d5": "2563cc04bb1a791d424785f389fd0bc3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/1ff575f00147014da38eb8b2637827103f8e7b": "21eaa24d715ff4fb161617b29d697666",
".git/objects/e7/414878d7f8009da1725800201d144df0effd8f": "99c044932519539d3a9980dc617826ad",
".git/objects/e9/2844694081502f5bfb07940cb3843e42e753c1": "a86267c45ad41cd9b4be17fc3dc98555",
".git/objects/e9/680e42aabdd672fc56e96429c67fbc0bb26b26": "59900ed8d3e158d35eb8e2de65c9a6ca",
".git/objects/ea/13c7f444909ed6d7e9cc8651bd8996d48e6437": "0be7dd84ff8651c8ccbf629ee7b274ca",
".git/objects/ed/2581a2f30ac27ce9b27a5ef7d89f992b3c7a5b": "28a15db0a21df701b67b7b5c18e4bc98",
".git/objects/fa/53149f6ac342cee621127731cc5de420613e59": "e936014b94439ac202e738dd0bee7d15",
".git/objects/fb/b85ef8238c608b8c2051116925e6e4dbdc9565": "90ed048ed23da989cf92c1991d39e895",
".git/objects/fd/5c1306b5e3473baf5709c4128c42dc06956d99": "1dc31c6e702af69f27481e42432d5d6a",
".git/objects/fd/ad6bbf039dcb49cb544130bdd2f75f23e30998": "f46b034839975011962a6beefc6a402e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "de15dde2b8e87fa70da5c75a564be17d",
".git/refs/remotes/origin/main": "de15dde2b8e87fa70da5c75a564be17d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1c3a6521d11bdaa18b411189bd3e3820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "658cf63517e4f61c783534223ac60792",
"/": "658cf63517e4f61c783534223ac60792",
"main.dart.js": "f70834e6bfc8cd8ff73efee413b93ca8",
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
