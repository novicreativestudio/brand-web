# NOVI Creative Studio — Production Static Site

## Production entry
Use `index.html` for the live site.

## Included production files
- `index.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `assets/css/styles.css`
- `assets/js/script.js`
- `assets/images/`
- `assets/icons/`
- `assets/social/`

## Important SEO note
The canonical URL, Open Graph URL, and sitemap currently use:

`https://novicreativestudio.ca/`

Before final launch, replace this with the exact live domain if different.

## SEO / AEO implemented
- Semantic title and meta description
- Canonical URL
- Open Graph metadata
- Twitter Card metadata
- Organization / WebSite / ProfessionalService JSON-LD
- Descriptive image alt text
- Production favicon set
- Web app manifest
- Robots and sitemap
- Branded 404 page

## Visual update
The gold light / leaf motif was sharpened and kept as an overlay layer:
`assets/images/novi-creative-studio-gold-leaf-light-motif.png`

The headline remains live HTML text for SEO.


v20 refinement:
- Kept the sprout silhouette but toned it down to a muted champagne gold more aligned with the NOVI palette.
- Reduced the glare / glitter intensity of the gold motif overlay.
- Lowered the desktop hero height to reduce the navy area.
- Adjusted the gold wave path to create a stronger mountain-like peak under the sprout.


v21 refinement:
- Replaced the light sprout motif with a version matched more closely to the user-approved reference.
- Cropped the desktop hero image itself from the top to shorten the navy area above the woman.
- Thickened the main gold curve and slightly strengthened the dashed gold guide.


v23 hero refinement:
- Based on the v21 build.
- Lowered the gold sprout motif so it sits closer to the crest of the wave.
- Thickened the main gold line and the dashed gold guide.
- Re-shaped the hero wave to have a more pronounced mountain-like crest.


v24 hero motif refinement:
- Lowered the gold sprout motif further so it visually grows from the second gold light line above the green wave.
- Softened the motif glow slightly so it feels more integrated with the hero artwork.
- Kept the v23 thicker gold line and mountain-like wave shape.


v25 final visual refinement:
- Lowered the gold sprout motif substantially so it visually emerges from the upper gold line above the green wave instead of floating above it.
- Softened glow and saturation for a more premium, integrated look.
- Nudged the hero copy upward to keep the overall desktop composition balanced.


v25b tweak:
- Based on v25 exactly, with only one design change: the hero sprout motif is lowered slightly more so it sits closer to the gold line.

v25c typography / services refinement:
- Based on v25b.
- Changed the gold 'purpose.' word from glowing gold to a cleaner matte/satin gold treatment.
- Moved the 'Our Services' intro block upward for better visual balance while keeping cards and waves stable.

v25d refinement:
- Brightened the matte/satin gold treatment for 'purpose.' while keeping the non-blurry look.
- Improved Our Services readability with stronger gold, slightly larger type, and clearer glow.
- Moved the service cards upward to match the raised Our Services text block.

v25e refinement:
- Made the 'purpose.' gold more dimensional and visible with a satin / foil-like gold gradient and crisp shadow.
- Improved top ribbon text contrast while keeping the same size.
- Added subtle left/right sparkle animation to the pink ribbon.
- Moved service cards another 1-2cm upward and adjusted spacing below.

v25f refinement:
- Moved the four service cards approximately 2cm higher.
- Added visible blinking sparkle stars directly to the left and right of the pink ribbon text.
- Disabled the earlier far-left/far-right ribbon sparkle placement because it was too subtle / not visible near the text.

v25g refinement:
- Based on v25f.
- Moved the four service cards approximately 1.2cm higher.
- Added a small amount of bottom breathing room so the section remains balanced.

v25i refinement:
- Corrected service card placement so cards sit just below the Our Services intro instead of overlapping it.
- Made 'purpose.' sharper, brighter, and more dimensional with a crisp foil-like gold treatment and subtle stroke.
- Added visible sparkle stars directly beside the pink ribbon text.

v25j refinement:
- Lowered the four service cards slightly from v25i to reduce crowding and improve breathing room.
- Updated the 'purpose.' word to a more elegant italic serif, foil-like gold treatment closer to the screenshot style.

v26 integrated stable FV:
- Based on v25j.
- Rebuilt the hero behavior as a stable proportional stage using aspect-ratio, so the woman image, headline, sprout, gold line, and wave scale together more like the Safe Garden reference.
- Removed the fixed max-height compression that caused the woman image to drift/crop strangely during browser zoom-out.
- Kept the approved v25j visual direction, service card balance, purpose typography, SEO/AEO files, favicon set, 404, robots, sitemap, and manifest.
- Added the subtle handwritten underline under 'purpose.' without using the unstable v25k crop approach.

v29 desktop zoom stability:
- Based on v26 integrated stable FV.
- Gated all max-width responsive breakpoints with pointer:coarse so desktop browser zoom does not trigger mobile/tablet layout changes.
- Real touch mobile/tablet devices still receive the responsive layout.
- Added fine-pointer desktop rules to preserve the approved FV composition for the woman image, sprout, heading, and menu during Chrome zoom changes.

v30 mobile correction:
- Based on v29.
- Added final iPhone/mobile overrides so the pink ribbon, header, hero text, woman image, sprout, wave, services intro, and service cards have a dedicated vertical mobile layout.
- Desktop zoom-stability rules remain for pointer:fine devices.

v31 mobile redesign:
- Added final hard mobile overrides to fix the iPhone layout.
- The mobile hero is now compact instead of extremely tall.
- Hero headline, woman image, sprout, wave, Our Services, intro, and cards have dedicated mobile coordinates.
- Service cards switch to a compact 2-column mobile poster layout similar to the supplied reference.
