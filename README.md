# BlockWorld Adventures

**Build anything. Explore everywhere.**

Installable, offline-capable browser game, deployed separately from the original BlockWorld Neighborhood 06 website.

## Build provenance

- Based on the tested **BlockWorld 2.0 Run 3** compiled standalone release, source `bf51e71b3b5849d08773bb9a8c3172de83646a1f`, archive checkpoint `99d922c1fa566a086bcbe9ddf851d98d4e4c19cd`.
- Bundled JavaScript, CSS, world assets, and embedded credits are preserved from that release; the deployment adds a web-app manifest, original icons, a site-scoped service worker and visible BlockWorld Adventures branding.
- Run 4 QA fixes are **not included**. Run 4 discovered a world-switch save-ownership race affecting this Run 3 version; avoid relying on important creative saves until the repaired build is validated and deployed. Export portable backups regularly.
- This repository hosts only compiled files, not source development; game source remains in `novice-builder/object-builder`.

## Usage

GitHub Pages: https://novice-builder.github.io/blockworld-adventures/

Open the site in Chrome or Safari; use the browser's **Add to Home Screen** / install option when available. The service worker caches this site's game files for offline re-opening after the initial online installation. Device storage may be evicted. Use the in-game backup export for important worlds.

This release has not yet been physically qualified on the Lenovo Android tablet or iPhone Safari. The original release passed automated browser tests, but this repackaged deployment should be device-tested as well. Saves in other browser origins or the original BlockWorld site do not automatically transfer; use in-game backup files.

## Playable asset-rebuild Preview 02

Preview 02 is published separately at https://novice-builder.github.io/blockworld-adventures/preview-02/ .
This is a new standalone village/woodland/meadow prototype based on 71 CC0 assets; it does NOT replace the Run 3 root game. It is an online browser preview, not yet an offline-installable PWA. Its saved worlds are independent of the Run 3 site. Buildings are exterior-only, and physical iPhone/Android performance remains unverified. Keep portable backups of important creations.

Provenance: [Preview 02 source archive](https://github.com/novice-builder/object-builder/tree/9f07d29ae458be7ddba5a88ff81c85aa73172385/blockworld2/artifacts/adventures-v2) and [actual rendered screenshot gallery](https://github.com/novice-builder/object-builder/blob/9f07d29ae458be7ddba5a88ff81c85aa73172385/blockworld2/docs/adventures-v2/GALLERY.md).

## Playable Preview 03 — Connected Willow Vale

Preview 03 is published separately at https://novice-builder.github.io/blockworld-adventures/preview-03/ . It combines Willowmere village, Whispering Wood and Maker's Meadow into a single connected 370×196 m world with a live minimap and an interactive full map with landmark teleportation. Previous Preview 02 and the Run 3 root game remain available at their original links. This is an online preview, not an offline-installable PWA; iPhone/Lenovo performance remains unverified. Browser-origin saved worlds are not transferred automatically, so keep and export backups.

Source: [verified Preview 03 package](https://github.com/novice-builder/object-builder/tree/59aba9022fdd21da26c77d1d7a8f2017b425aebb/blockworld2/artifacts/adventures-v3); [actual rendered screenshots and report](https://github.com/novice-builder/object-builder/blob/59aba9022fdd21da26c77d1d7a8f2017b425aebb/blockworld2/docs/adventures-v3/GALLERY.md).
