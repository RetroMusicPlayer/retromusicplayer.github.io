'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bf4243adfcb76f57d5a148cfbe47f9bf",
".git/config": "e236e62ce3190af77e57e62c4d22c05e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "273ae3c46f1318ac78e0192f4d32b744",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2ffc6c78456257e6dde13c3a3fa67de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f45de7d9041fcdce7af2ab9d83c7ac81",
".git/logs/refs/heads/main": "749325b00323ec91ed6a97718fc0d26d",
".git/logs/refs/remotes/origin/main": "6c2f60de0b72008a2d7930fbede75abc",
".git/objects/10/9197ed20bff67cc015ee1daf7b8c320b2e4809": "6b94cddcfe9f4dd7547434762693ecd5",
".git/objects/1d/a8f5f3945483534a90cbf504b99c81534d0f33": "99d3f3c4edc398025185f7085d269da8",
".git/objects/1d/f5d753f5467e3d076d2890baf553c9b75bcb56": "cf22f1d6b3d7009fed795553af06c3b4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/e09e814c2d90b2aa559fd0cbd91fb02a025814": "b2acb08667e3ace09d62ad2f50ecd57d",
".git/objects/2b/549cf83ce13a01a0adf1d48fdd3cb8d97f1293": "b049c22c6340c39e280047d39a56938d",
".git/objects/34/4c235ac589112de376109d76c2c4ba50ff6077": "711c98cd0ad9a9de187feff4d152e60f",
".git/objects/38/d0d02d6832afe3e37f31f0e24fc237c179e51b": "90e62f16a5901396d4671dbd6c15d712",
".git/objects/39/1a667a6ea9b3f4e7194f6aa9d06944869a1db8": "d502e84495c36c66a87f2bb63ec32d0d",
".git/objects/3b/0d3383ca31908ccb6420dc341c5a0cd3660ee3": "77f1485cef3ec6cb08205182f121c2c2",
".git/objects/3e/5d6e778b9a5126ff1ec75d5bf90de24cae0857": "756bcd5d20d844f58544e104e9394296",
".git/objects/40/4835c117a6436f4a4c56412a2dfa9d11be0626": "7a72cb208f670365b9db9a27a798cd3c",
".git/objects/51/df055056f281af01dce32bea5071145e0a3c16": "fe4842b02af279f21bca516240d8251f",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/67/494867bc54cf535a3cc96b4b6275dccee2f01b": "e3dc9afc33f6ddb93b9b12d5c42dd76d",
".git/objects/74/2f97adb30f21a2d568bba49118acb42d7e2966": "bb57dd14a3b1b1d056befc3c64dff0c0",
".git/objects/75/931dc435154651d8962a34b53c060eb27814da": "f52dd8be8b0f4628a93c8c23620eb53d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/82/4c241fb40e547fb21645d0e53f8b336ab4aa73": "e69e41b5894f5741ffbd1dc55271a665",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/df22e58e986c0d5c3e225146e91fe1ce4f8a7b": "fa1db1176e70fe42d7df01ed8889cf6b",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/9d/2a56bf9858dbab104c73e224672c11d407b627": "bcbb1bdeb6b777013d347913d9c7afdc",
".git/objects/9e/bb4bea492796b2491e77460a26e4684a92282c": "c515f5b911bfafea52cab60adc2521e4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2514d993837d3e06c3e621a8d6a3e11927b8a8": "e81582561a5901809ab1ca6a113dc5fd",
".git/objects/a5/a75e7a5f782a35e60a8db72b038443b5479056": "3646ae9c6d6e057889bacd3d00039124",
".git/objects/a5/c715b75695efc8cb18769d9f6b3fbb17771657": "ad92fa0240d7c0bc538a3b3fb6f86608",
".git/objects/a7/71b92f2b67e812602648e87ea0af748ea9dccc": "6fff7b20b3aeb2936c76c85a6252245a",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/c45abee0f8084c0a15e3523154b88a2843ca34": "3ab42455a6e7da6712dda82620fdc746",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/5b2bc689af4df42e8eb4c70efff3545a119bb5": "1a983462ff4c130e61d88cbf572f7a0d",
".git/objects/ae/13c812cfcf5a5938f6a00787a0ebd71a0e1ea7": "0ce0e044000992a135038f4f4c993483",
".git/objects/ae/ca559bbbef10142a5088c7bfa4c28bb94c294b": "f7a65a2b8ca057af3ea00561a0017440",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/26647bbe493a901b760b30cd1e1dac3ef7fcb1": "5dc7135abe24d54a3f2e1cc5c4755ea2",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/c6/32d3782458723edbbc2e73bcde88cb431b38a3": "7b998ec930c9a792dbdfddbcc84d9600",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/e4/002f380eb4cabf1a91ef8e596d4ea5d65c9f6b": "8fb2b1a2c8f540adbc46904d2c6fe009",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1cb67a071c26213349ce022e4b3615232dbdf9": "543f542b6ec40cbe72ece6a291de793e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/d171d6a73499f147572887546cb7f4feb6b871": "af0d84dd0dd6fd770cef3ac3f3b33e7b",
".git/ORIG_HEAD": "2d9370af00f178c5693403d89e9ca518",
".git/refs/heads/main": "29a08b4051e6a960948918360165c609",
".git/refs/remotes/origin/main": "29a08b4051e6a960948918360165c609",
"assets/AssetManifest.json": "5d7fbd4b312bc19b7aa2a6b574794ef0",
"assets/assets/ic_launcher.png": "b3e43896feb60e94ed5702ddc27daf64",
"assets/assets/ProductSans-Regular.ttf": "af98833e80c029f42e7e7a55d8270fdf",
"assets/FontManifest.json": "afdc0fdd59b21e76c680476a47d4e1c5",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "14335247f65ab314c56ce9eb50412621",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"CNAME": "93bb6b79cfea70c73aad650ba2752843",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fae4edca9760b3f78e5ae9ac3076f575",
"/": "fae4edca9760b3f78e5ae9ac3076f575",
"main.dart.js": "b2bcaacee679b2ec5d93c883cb4ff5c7",
"manifest.json": "44b59d64270eebb345a9a1ff8b5fdaec",
"version.json": "829f0f4a11e38397eaa0916e3901ee2b"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
