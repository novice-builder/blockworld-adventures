#!/usr/bin/env python3
"""Promote the exact verified Preview 10 archive to the isolated GitHub Pages root."""
from __future__ import annotations
import hashlib
import json
import pathlib
import shutil
import textwrap
import zipfile

ROOT = pathlib.Path(".")
PACKAGE = pathlib.Path("/tmp/blockworld-preview10.zip")
MANIFEST = pathlib.Path("/tmp/blockworld-preview10-build.json")
EXPECTED_ZIP_SHA = "c56645f59f71e7a36e752bd29c4c4e92a5946f4b15b3114622075e555a4f2b75"
SOURCE_COMMIT = "6ac4edfe9e79ee71cfa815ab6ff06e1ed0075613"
ARCHIVE_COMMIT = "3dcd4f630006fd00f5631d362ce9cc20da8a595c"

def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()

assert digest(PACKAGE.read_bytes()) == EXPECTED_ZIP_SHA, "Preview 10 ZIP SHA256 mismatch"
manifest = json.loads(MANIFEST.read_text())
assert manifest["version"] == "Adventures-Preview-10"
assert manifest["sourceCommit"] == SOURCE_COMMIT
expected = manifest["files"]
assert len(expected) == 131, "Unexpected runtime asset count"

preview = ROOT / "preview-10"
assert not preview.exists(), "Refusing to overwrite existing immutable Preview 10"
# Replace only current root runtime assets; never touch archived preview folders.
for name in ("assets", "adventures", "licenses"):
    existing = ROOT / name
    assert not existing.is_symlink(), f"Unexpected root symlink: {name}"
    if existing.exists():
        assert existing.is_dir(), f"Expected root runtime dir: {name}"
        shutil.rmtree(existing)

with zipfile.ZipFile(PACKAGE) as archive:
    assert archive.testzip() is None, "Corrupted ZIP archive"
    names = set(archive.namelist())
    roots = {name[:-len("adventures.html")] for name in names if name.endswith("adventures.html")}
    assert len(roots) == 1, f"Ambiguous ZIP root: {roots}"
    prefix = next(iter(roots))
    for name, metadata in expected.items():
        rel = pathlib.PurePosixPath(name)
        assert name and not rel.is_absolute() and ".." not in rel.parts and "\\" not in name
        full_name = prefix + name
        assert full_name in names, f"Missing archive member: {name}"
        data = archive.read(full_name)
        assert len(data) == metadata["bytes"], f"Size mismatch: {name}"
        assert digest(data) == metadata["sha256"], f"Content mismatch: {name}"
        for destination in (preview / name, ROOT / name):
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(data)

assert (ROOT / "adventures.html").is_file()
original_html = (ROOT / "adventures.html").read_text()
assert '<div id="app"></div>' in original_html
assert 'src="./assets/adventures-' in original_html
main_js = original_html.split('src="./assets/')[1].split('"')[0]
assert (ROOT / "assets" / main_js).is_file(), "Compiled JS bundle missing"

# Preserve packaged HTML exactly at /preview-10/ and /adventures.html.
preview_index = (
    '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    '<meta name="viewport" content="width=device-width,initial-scale=1">'
    '<meta http-equiv="refresh" content="0;url=./adventures.html">'
    '<title>BlockWorld Adventures — Preview 10</title></head>'
    '<body><p><a href="./adventures.html">Open Preview 10</a></p></body></html>\n'
)
(preview / "index.html").write_text(preview_index)

main_html = original_html.replace(
    '<link rel="icon" href="./icon.svg" />',
    '<link rel="icon" href="./icon.svg" />\n'
    '    <link rel="manifest" href="./manifest.webmanifest" />\n'
    '    <link rel="apple-touch-icon" href="./icon-180.png" />\n'
    '    <meta name="apple-mobile-web-app-capable" content="yes" />'
).replace(
    '<title>BlockWorld Adventures · Willowmere</title>',
    '<title>BlockWorld Adventures</title>'
)
assert '<link rel="manifest" href="./manifest.webmanifest" />' in main_html
registration = (
    '  <script>if ("serviceWorker" in navigator && location.protocol === "https:") {'
    ' navigator.serviceWorker.register("./sw.js", {scope:"./",updateViaCache:"none"})'
    '.catch(() => {}); }</script>\n'
)
assert registration not in main_html
main_html = main_html.replace("</body>", registration + "</body>")
(ROOT / "index.html").write_text(main_html)

webmanifest = {
    "id": "./?app=blockworld-adventures",
    "name": "BlockWorld Adventures",
    "short_name": "BlockWorld",
    "description": "Build anything. Explore everywhere.",
    "start_url": "./",
    "scope": "./",
    "display": "fullscreen",
    "orientation": "any",
    "background_color": "#f7f1df",
    "theme_color": "#243c35",
    "icons": [
        {"src": "./icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "./icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
    ],
}
(ROOT / "manifest.webmanifest").write_text(json.dumps(webmanifest, indent=2) + "\n")
build_id = "adventures-main-preview10-" + SOURCE_COMMIT[:8]
(ROOT / "release.json").write_text(json.dumps({
    "build": build_id,
    "release": "Preview 10",
    "sourceCommit": SOURCE_COMMIT,
    "archiveCommit": ARCHIVE_COMMIT,
    "assetCount": len(expected),
    "website": "https://novice-builder.github.io/blockworld-adventures/",
    "previousPreviewsPreserved": True
}, indent=2) + "\n")
(preview / "DEPLOYMENT.txt").write_text(
    f"Preview 10 source {SOURCE_COMMIT}; archive commit {ARCHIVE_COMMIT}; "
    f"ZIP SHA256 {EXPECTED_ZIP_SHA}. Public deployment, no original game modifications.\n"
)

# The old root service worker can serve stale game bundles. Replace its cache name,
# install immediately, delete obsolete root caches and leave preview URLs alone.
cached_files = list(dict.fromkeys(
    ["./", "./index.html", "./manifest.webmanifest", "./release.json"] +
    ["./" + name for name in expected if not name.endswith(".md") and
     not name.endswith(".txt") and not name.endswith(".py")]
))
service_worker = textwrap.dedent(r"""
    /* BlockWorld Adventures main site — Preview 10, isolated offline cache. */
    const PREFIX = 'bwa:main:' + encodeURIComponent(self.registration.scope) + ':';
    const LEGACY = 'bw2:development:' + encodeURIComponent(self.registration.scope) + ':';
    const CACHE = PREFIX + __BUILD_ID__;
    const FILES = __CACHE_FILES__;
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
""").strip() + "\n"
service_worker = service_worker.replace("__BUILD_ID__", json.dumps(build_id)).replace(
    "__CACHE_FILES__", json.dumps(cached_files))
(ROOT / "sw.js").write_text(service_worker)
assert "preview-\\d+" in service_worker

(ROOT / "README.md").write_text(
    "# BlockWorld Adventures\n\n"
    "**Build anything. Explore everywhere.**\n\n"
    "Main game: https://novice-builder.github.io/blockworld-adventures/\n\n"
    "The main game runs **Preview 10** based on source "
    f"`{SOURCE_COMMIT}`. Willow Vale now includes Reedbank and its mill, plus "
    "furnished building interiors, fade transitions, walkable staircases, "
    "upstairs bedrooms and rooms. Maps and Xbox-compatible browser gamepad "
    "controls are retained. Main-site offline caching is versioned.\n\n"
    "Earlier playable previews remain at:\n"
    "- https://novice-builder.github.io/blockworld-adventures/preview-02/\n"
    "- https://novice-builder.github.io/blockworld-adventures/preview-03/\n"
    "- https://novice-builder.github.io/blockworld-adventures/preview-06/\n"
    "- https://novice-builder.github.io/blockworld-adventures/preview-10/\n\n"
    "Save records remain browser- and version-specific, with no destructive "
    "migration. Export backups before upgrades, and use Preview 10 or newer "
    "for layout-6 backups. Older Run 3 source remains archived in object-builder.\n\n"
    "Package integrity: 131 runtime files verified against original SHA256 "
    "manifest; 182 deterministic tests, 72 browser checks and 25 package "
    "checks passed upstream. Physical iPhone/Lenovo/Xbox tests are unverified. "
    "The original Neighborhood 06 website is unaffected.\n"
)
assert len(expected) == 131 and len(cached_files) > 65
print(f"Verified ZIP {EXPECTED_ZIP_SHA}, deployed {len(expected)} runtime assets; "
      f"cached {len(cached_files)} files, built from {SOURCE_COMMIT}.")
