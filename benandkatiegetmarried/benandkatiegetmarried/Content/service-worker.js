"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Content/index.html","b0ac253882e28e24c6f826d68a363419"],["/Content/static/css/main.e45ba2ae.css","d68ab6db6a1a288785acb55478221a9a"],["/Content/static/js/main.53811ede.js","3a2b1c6612ff6e82bc63c2ad92370402"],["/Content/static/media/benFace.d001f106.png","d001f106bf8b7465a108066c03d8f2de"],["/Content/static/media/catriona2.82f6e2e5.png","82f6e2e576991da7185a6337b69f86d2"],["/Content/static/media/david3.912e56aa.png","912e56aa008bd62b9afd14a39ccaf876"],["/Content/static/media/eric4.b6df508b.png","b6df508b37b68a2ddc5a72933d39a8b9"],["/Content/static/media/janine.353fc928.png","353fc928b2958c36b2232a658dc0930f"],["/Content/static/media/katieFace.cf172edc.png","cf172edc7f7c4d3d8eacec478c25750e"],["/Content/static/media/loading.8885e292.svg","8885e292d15cecf83eff550883f63c81"],["/Content/static/media/pic2.1b92db2e.jpg","1b92db2e84ac667e09ff011c39f071ca"],["/Content/static/media/sam3.2e43ccb0.png","2e43ccb03ab88810128275fc3b2f9813"],["/Content/static/media/scott.8632e403.png","8632e4038e758b90c566838a1ae5b653"],["/Content/static/media/soph5.36770e1a.png","36770e1a8d7a7fd8e2e257aca2dd6f07"],["/Content/static/media/texture-background.f2cff824.png","f2cff8242829f9afef30345bc693b358"],["/Content/static/media/trish3.8de4e0ce.png","8de4e0ce3fe25b0a68f420d7126695ce"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/Content/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});