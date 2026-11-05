/* Main BlockWorld Adventures: pinned Preview 03 release. */
const PREFIX='bwa:main:'+encodeURIComponent(self.registration.scope)+':';
const LEGACY='bw2:development:'+encodeURIComponent(self.registration.scope)+':';
const CACHE=PREFIX+"adventures-main-preview03-eb7003e";
const FILES=["./", "./index.html", "./manifest.webmanifest", "./release.json", "./ASSET-CREDITS.txt", "./adventures.html", "./adventures/PROVENANCE.md", "./adventures/character/Explorer.glb", "./adventures/inventory.json", "./adventures/licences/KayKit-Adventurers-CC0.txt", "./adventures/licences/KayKit-Medieval-CC0.txt", "./adventures/licences/Kenney-CC0.txt", "./adventures/licences/Quaternius-Medieval-CC0.txt", "./adventures/nature/campfire-stones.glb", "./adventures/nature/fence-planks.glb", "./adventures/nature/flower-purplea.glb", "./adventures/nature/flower-reda.glb", "./adventures/nature/flower-yellowa.glb", "./adventures/nature/grass-large.glb", "./adventures/nature/grass.glb", "./adventures/nature/lily-small.glb", "./adventures/nature/log.glb", "./adventures/nature/mushroom-red.glb", "./adventures/nature/plant-bush.glb", "./adventures/nature/plant-bushsmall.glb", "./adventures/nature/rock-largea.glb", "./adventures/nature/rock-largeb.glb", "./adventures/nature/rock-smalla.glb", "./adventures/nature/sign.glb", "./adventures/nature/stone-talla.glb", "./adventures/nature/stump-round.glb", "./adventures/nature/tent-smallopen.glb", "./adventures/nature/tree-detailed.glb", "./adventures/nature/tree-fat.glb", "./adventures/nature/tree-oak.glb", "./adventures/nature/tree-pinedefaulta.glb", "./adventures/nature/tree-pinedefaultb.glb", "./adventures/sources/prepare_assets.py", "./adventures/thumbnails/barrel.png", "./adventures/thumbnails/building_home_A_blue.png", "./adventures/thumbnails/building_home_A_green.png", "./adventures/thumbnails/building_home_B_blue.png", "./adventures/thumbnails/crate_A_small.png", "./adventures/thumbnails/flower-purplea.png", "./adventures/thumbnails/flower-reda.png", "./adventures/thumbnails/flower-yellowa.png", "./adventures/thumbnails/log.png", "./adventures/thumbnails/manifest.json", "./adventures/thumbnails/plant-bush.png", "./adventures/thumbnails/rock-largea.png", "./adventures/thumbnails/tent-smallopen.png", "./adventures/thumbnails/tree-oak.png", "./adventures/thumbnails/tree-pinedefaulta.png", "./adventures/thumbnails/wheelbarrow.png", "./adventures/village/barrel.glb", "./adventures/village/building_blacksmith_blue.glb", "./adventures/village/building_blacksmith_green.glb", "./adventures/village/building_bridge_A.glb", "./adventures/village/building_bridge_B.glb", "./adventures/village/building_church_blue.glb", "./adventures/village/building_church_green.glb", "./adventures/village/building_home_A_blue.glb", "./adventures/village/building_home_A_green.glb", "./adventures/village/building_home_B_blue.glb", "./adventures/village/building_home_B_green.glb", "./adventures/village/building_lumbermill_blue.glb", "./adventures/village/building_lumbermill_green.glb", "./adventures/village/building_market_blue.glb", "./adventures/village/building_market_green.glb", "./adventures/village/building_tavern_blue.glb", "./adventures/village/building_tavern_green.glb", "./adventures/village/building_tower_A_blue.glb", "./adventures/village/building_tower_A_green.glb", "./adventures/village/building_watermill_blue.glb", "./adventures/village/building_watermill_green.glb", "./adventures/village/building_well_blue.glb", "./adventures/village/building_well_green.glb", "./adventures/village/building_windmill_blue.glb", "./adventures/village/building_windmill_green.glb", "./adventures/village/cloud_big.glb", "./adventures/village/cloud_small.glb", "./adventures/village/crate_A_small.glb", "./adventures/village/crate_open.glb", "./adventures/village/fence_stone_straight.glb", "./adventures/village/fence_stone_straight_gate.glb", "./adventures/village/fence_wood_straight.glb", "./adventures/village/fence_wood_straight_gate.glb", "./adventures/village/flag_green.glb", "./adventures/village/hill_single_A.glb", "./adventures/village/hills_A.glb", "./adventures/village/mountain_A_grass.glb", "./adventures/village/rock_single_A.glb", "./adventures/village/rock_single_B.glb", "./adventures/village/sack.glb", "./adventures/village/tent.glb", "./adventures/village/tree_single_A.glb", "./adventures/village/tree_single_B.glb", "./adventures/village/waterlily_A.glb", "./adventures/village/waterplant_A.glb", "./adventures/village/wheelbarrow.glb", "./assets/adventures-DYJf8BwX.css", "./assets/adventures-Db1xCGZF.js", "./icon-180.png", "./icon-192.png", "./icon-512.png", "./icon.svg", "./licenses/three-MIT.txt", "./licenses/vite-LICENSE.md"];
self.addEventListener('install',e=>{
e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
e.waitUntil((async()=>{
const old=await caches.keys();
await Promise.all(old.filter(k=>k!==CACHE&&(k.startsWith(PREFIX)||k.startsWith(LEGACY))).map(k=>caches.delete(k)));
await self.clients.claim();
})());
});
self.addEventListener('fetch',e=>{
if(e.request.method!=='GET')return;
const url=new URL(e.request.url);
if(url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
const path=url.pathname.slice(new URL(self.registration.scope).pathname.length);
if(path.startsWith('preview-'))return;
if(e.request.mode==='navigate'){
e.respondWith((async()=>{
try{const r=await fetch(e.request);if(r.ok)return r;}catch{}
const c=await caches.open(CACHE);
return (await c.match(new URL('index.html',self.registration.scope).href))||Response.error();
})());
}else if(FILES.includes('./'+path)){
e.respondWith((async()=>{const c=await caches.open(CACHE);return (await c.match(e.request))||fetch(e.request);})());
}
});
