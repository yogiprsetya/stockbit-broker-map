# Stockbit Broker Map

A lightweight Chrome/Chromium extension (Manifest V3) that replaces two-letter broker codes on Stockbit with readable types: SmartMoney, Whale, Retail, or Mix. Hover to see the full broker name.

## Features

- Replaces codes with a badge and type label
- Color-coded by type via CSS variables
- Works on dynamic tables (MutationObserver + periodic scan)
- Zero extra permissions

## Install (Load Unpacked)

1. Clone or download this folder.
2. Open Chrome and visit `chrome://extensions`.
3. Enable "Developer mode".
4. Click "Load unpacked" and select this project folder.
5. Open Stockbit (`*.stockbit.com`) to see the changes.

## Usage

- Broker codes in tables become a colored badge + type label.
- Tooltip (title) shows the full broker name.
- Disable by toggling/removing the extension in `chrome://extensions`.

## Structure

- `manifest.json` — MV3 config, runs on `*://*.stockbit.com/*`.
- `content.js` — broker map, code detection, DOM transformation.
- `sc.css` — visual styles for badges and type colors.

## Customize

- Edit the `BROKERS` map in `content.js` to add/update codes.
- Tweak colors via `[data-broker-type]` rules in `sc.css`.
- Adjust detection with `CODE_REGEX` and selectors in `scanAndReplace`.

## Notes

- Targets Chromium-based browsers (Chrome, Edge, Brave).
- No data collection, network requests, or additional permissions.

## Troubleshooting

- If badges flicker/disappear, dynamic updates may re-render; the script re-applies automatically.
- Ensure Developer Mode is enabled and the extension loads without errors.
