---
title: Firefox
description: Coldark for Firefox, with automatic dark preference detection and manual switching.
---

Coldark for Firefox adapts the palette to browser chrome and focuses on the parts of Firefox that are themeable today.

## Highlights

- Detects the user's preferred dark mode and applies the matching version automatically.
- Lets users switch between variants from a toolbar icon.
- Supports a keyboard shortcut to toggle the theme.

## Palette scope

Firefox only exposes a smaller theming surface than editors like VS Code, so this variant uses a reduced subset of the full Coldark palette. It focuses on frames, toolbars, selected tabs, fields, icons, and highlight states.

## Colors

### Coldark Cold

| Token | Hex | Role |
| --- | --- | --- |
| `coldark00` | `#e3eaf2` | Default background for frame, new tab page, and fields |
| `coldark01` | `#d0dae7` | Dark background for selected tab, toolbar, and sidebar |
| `coldark02` | `#8da1b9` | Darker background for inactive frame, highlight, and borders |
| `coldark04` | `#213043` | Lighter foreground for icons, new tab page, popup, highlight, fields, and inactive tab |
| `coldark05` | `#111b27` | Default foreground for selected tab and toolbar |
| `coldark07` | `#f0f4f8` | Lighter background for popup, focused fields, and button states |
| `coldark10` | `#005a8e` | Blue accent for special icons, focus border, selected tab border, tab loading, and field highlight |

### Coldark Dark

| Token | Hex | Role |
| --- | --- | --- |
| `coldark00` | `#111b27` | Default background for frame, new tab page, and fields |
| `coldark01` | `#213043` | Light background for selected tab, toolbar, and sidebar |
| `coldark02` | `#3c526d` | Lighter background for popup, focused fields, and button states |
| `coldark04` | `#d0dae7` | Dark foreground for icons, new tab page, popup, highlight, fields, and inactive tab |
| `coldark05` | `#e3eaf2` | Default foreground for selected tab and toolbar |
| `coldark07` | `#0b121b` | Dark background for inactive frame, highlight, and borders |
| `coldark10` | `#6cb8e6` | Blue accent for special icons, focus border, selected tab border, tab loading, and field highlight |

## Installation

1. Download the latest `.xpi` from the `web-ext-artifacts` directory in this package.
2. Open `about:addons` in Firefox.
3. Use the add-ons gear menu and choose **Install Add-on From File...**
4. Select the downloaded Coldark package.

## Notes

Some browser surfaces, such as a few hover states or parts of the new tab page, are not fully customizable in Firefox themes.
