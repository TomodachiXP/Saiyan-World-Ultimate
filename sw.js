/* Deixa o jogo funcionar sem internet e se atualizar sozinho quando houver versão nova. */
var V = "sw-remake-v1";
var BASE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", function (e) { e.waitUntil(caches.open(V).then(function (c) { return c.addAll(BASE); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  /* abre rápido com o que está guardado e busca a versão nova por trás */
  e.respondWith(caches.open(V).then(function (c) {
    return c.match(e.request).then(function (guardado) {
      var rede = fetch(e.request).then(function (r) { if (r && r.ok) c.put(e.request, r.clone()); return r; }).catch(function () { return guardado; });
      return guardado || rede;
    });
  }));
});
