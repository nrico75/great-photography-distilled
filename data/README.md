# Course data (separate from index.html)

All course and panel content lives here so `index.html` stays manageable.

## Files

- **blocks.js** – Course structure: blocks (picker sections) → cards → lessons.
  - Sets `window.DUMMY_IMAGE` and `window.BLOCKS`.
  - Add new blocks, cards, or lessons here. Each lesson can have: `id`, `title`, `body`, optional `eyebrow`, optional `subtitle`.

- **panels.js** – Panel content (Exercise + Deep Dive) per lesson id.
  - Sets `window.PANEL_BY_ID`.
  - Keys = lesson `id`. Value = `{ exercise?: {...}, deepDive?: { variant: "longform", sections: [{ h, p }, ...] } }`.

## Loading

`index.html` loads these with `<script src="data/blocks.js">` and `<script src="data/panels.js">` before the app script, then uses `window.BLOCKS` and `window.PANEL_BY_ID` (with empty fallbacks if files are missing).

## Adding more content

1. **New course/card/lesson** → edit `data/blocks.js` (add to the right block’s `cards` or card’s `lessons`).
2. **New Exercise/Deep Dive text** → edit `data/panels.js` (add or extend the entry for that lesson’s `id`).

No build step. Refresh the page after saving.
