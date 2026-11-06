/* BlockWorld Adventures main site — Preview 06, isolated offline cache. */
const PREFIX = 'bwa:main:' + encodeURIComponent(self.registration.scope) + ':';
const LEGACY = 'bw2:development:' + encodeURIComponent(self.registration.scope) + ':';
const CACHE = PREFIX + "adventures-main-preview06-c90159ee";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./release.json", "./adventures.html", "./adventures/character/Explorer.glb", "./adventures/furniture/bookcaseopen.glb", "./adventures/furniture/books.glb", "./adventures/furniture/chair.glb", "./adventures/furniture/rugrectangle.glb", "./adventures/furniture/table.glb", "./adventures/inventory-v4.json", "./adventures/inventory.json", "./adventures/modular/Door_4_Flat.glb", "./adventures/modular/Floor_WoodDark.glb", "./adventures/modular/Roof_Front_Brick4.glb", "./adventures/modular/Roof_RoundTiles_4x6.glb", "./adventures/modular/Wall_Plaster_Door_Flat.glb", "./adventures/modular/Wall_Plaster_Straight.glb", "./adventures/nature/campfire-stones.glb", "./adventures/nature/fence-planks.glb", "./adventures/nature/flower-purplea.glb", "./adventures/nature/flower-reda.glb", "./adventures/nature/flower-yellowa.glb", "./adventures/nature/grass-large.glb", "./adventures/nature/grass.glb", "./adventures/nature/lily-small.glb", "./adventures/nature/log.glb", "./adventures/nature/mushroom-red.glb", "./adventures/nature/plant-bush.glb", "./adventures/nature/plant-bushsmall.glb", "./adventures/nature/rock-largea.glb", "./adventures/nature/rock-largeb.glb", "./adventures/nature/rock-smalla.glb", "./adventures/nature/sign.glb", "./adventures/nature/stone-talla.glb", "./adventures/nature/stump-round.glb", "./adventures/nature/tent-smallopen.glb", "./adventures/nature/tree-detailed.glb", "./adventures/nature/tree-fat.glb", "./adventures/nature/tree-oak.glb", "./adventures/nature/tree-pinedefaulta.glb", "./adventures/nature/tree-pinedefaultb.glb", "./adventures/sources/furniture-source-verification.json", "./adventures/sources/modular-source-verification.json", "./adventures/thumbnails/barrel.png", "./adventures/thumbnails/building_home_A_blue.png", "./adventures/thumbnails/building_home_A_green.png", "./adventures/thumbnails/building_home_B_blue.png", "./adventures/thumbnails/crate_A_small.png", "./adventures/thumbnails/flower-purplea.png", "./adventures/thumbnails/flower-reda.png", "./adventures/thumbnails/flower-yellowa.png", "./adventures/thumbnails/furniture-bookcaseopen.png", "./adventures/thumbnails/furniture-chair.png", "./adventures/thumbnails/furniture-rugrectangle.png", "./adventures/thumbnails/furniture-table.png", "./adventures/thumbnails/log.png", "./adventures/thumbnails/manifest.json", "./adventures/thumbnails/plant-bush.png", "./adventures/thumbnails/rock-largea.png", "./adventures/thumbnails/tent-smallopen.png", "./adventures/thumbnails/tree-oak.png", "./adventures/thumbnails/tree-pinedefaulta.png", "./adventures/thumbnails/wheelbarrow.png", "./adventures/village/barrel.glb", "./adventures/village/building_blacksmith_blue.glb", "./adventures/village/building_blacksmith_green.glb", "./adventures/village/building_bridge_A.glb", "./adventures/village/building_bridge_B.glb", "./adventures/village/building_church_blue.glb", "./adventures/village/building_church_green.glb", "./adventures/village/building_home_A_blue.glb", "./adventures/village/building_home_A_green.glb", "./adventures/village/building_home_B_blue.glb", "./adventures/village/building_home_B_green.glb", "./adventures/village/building_lumbermill_blue.glb", "./adventures/village/building_lumbermill_green.glb", "./adventures/village/building_market_blue.glb", "./adventures/village/building_market_green.glb", "./adventures/village/building_tavern_blue.glb", "./adventures/village/building_tavern_green.glb", "./adventures/village/building_tower_A_blue.glb", "./adventures/village/building_tower_A_green.glb", "./adventures/village/building_watermill_blue.glb", "./adventures/village/building_watermill_green.glb", "./adventures/village/building_well_blue.glb", "./adventures/village/building_well_green.glb", "./adventures/village/building_windmill_blue.glb", "./adventures/village/building_windmill_green.glb", "./adventures/village/cloud_big.glb", "./adventures/village/cloud_small.glb", "./adventures/village/crate_A_small.glb", "./adventures/village/crate_open.glb", "./adventures/village/fence_stone_straight.glb", "./adventures/village/fence_stone_straight_gate.glb", "./adventures/village/fence_wood_straight.glb", "./adventures/village/fence_wood_straight_gate.glb", "./adventures/village/flag_green.glb", "./adventures/village/hill_single_A.glb", "./adventures/village/hills_A.glb", "./adventures/village/mountain_A_grass.glb", "./adventures/village/rock_single_A.glb", "./adventures/village/rock_single_B.glb", "./adventures/village/sack.glb", "./adventures/village/tent.glb", "./adventures/village/tree_single_A.glb", "./adventures/village/tree_single_B.glb", "./adventures/village/waterlily_A.glb", "./adventures/village/waterplant_A.glb", "./adventures/village/wheelbarrow.glb", "./assets/adventures-Bnf_TqVr.css", "./assets/adventures-yTikIZOx.js", "./icon-180.png", "./icon-192.png", "./icon-512.png", "./icon.svg"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name =>
      name !== CACHE && (name.startsWith(PREFIX) || name.startsWith(LEGACY))
    ).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  const relative = url.pathname.slice(new URL(self.registration.scope).pathname.length);
  if (/^preview-\d+\//.test(relative)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try { const response = await fetch(event.request); if (response.ok) return response; } catch {}
      const cache = await caches.open(CACHE);
      return (await cache.match(new URL('index.html', self.registration.scope).href)) || Response.error();
    })());
  } else if (FILES.includes('./' + relative)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      return (await cache.match(event.request)) || fetch(event.request);
    })());
  }
});
