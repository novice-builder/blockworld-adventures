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
