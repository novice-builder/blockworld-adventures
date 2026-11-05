# BlockWorld Adventures

**Build anything. Explore everywhere.**

The root GitHub Pages site now hosts the verified **Preview 03 — connected Willow Vale**.
Website: https://novice-builder.github.io/blockworld-adventures/

The new game connects Willowmere, Whispering Wood, Maker's Meadow and Brookside in a 370 × 196 metre valley with a live minimap, zoomable world map and safe landmark teleportation. The production web root is built from the exact 105 source assets in the verified Preview 03 package; only HTML launch metadata, PWA manifest and site-scoped offline worker were adapted for the main URL.

## Historical releases

- [Preview 03 (unaltered)](https://novice-builder.github.io/blockworld-adventures/preview-03/)
- [Preview 02 (unaltered)](https://novice-builder.github.io/blockworld-adventures/preview-02/)
- [Original Run 3 source archive](https://github.com/novice-builder/object-builder/tree/99d922c1fa566a086bcbe9ddf851d98d4e4c19cd/blockworld2/artifacts/run3)
- The original root-only Run 3 website version can also be restored from this website repository's Git commit history.

## Data and compatibility

Preview 03 uses a separate Adventures save database from the original Run 3 game. Old Run 3 creations remain in browser storage unless cleared but do not appear automatically in the new game. Old Preview 01/02 saves retain their independent layouts and are not silently merged. Back up valuable creations before updates and use the in-game export/import where appropriate. Cross-version backup compatibility is limited: use Preview 03 for connected-vale backups.

This site offers an installable home-screen web app with a versioned, scoped offline cache. Fully loading once online prepares files for later offline use where browser storage allows; iOS may evict cached files. For source integrity and tests, see [Preview 03 report](https://github.com/novice-builder/object-builder/blob/59aba9022fdd21da26c77d1d7a8f2017b425aebb/blockworld2/docs/adventures-v3/REPORT.md). Test counts are 140 deterministic + 123 browser checks. This deployment has not yet been physically tested on iPhone or Lenovo tablet. Houses remain closed exteriors.

The original Neighborhood 06 and object-builder GitHub Pages website are unaffected.
