---
title: Firefox
description: Coldark for Firefox, with automatic dark preference detection and manual switching.
---

Coldark for Firefox adapts the palette to browser chrome and focuses on the parts of Firefox that are themeable today.

## Highlights

- Detects the user's preferred dark mode and applies the matching variant automatically.
- Lets users switch between variants from a toolbar icon.
- Supports a keyboard shortcut to toggle the theme.

## Palette scope

Firefox only exposes a smaller theming surface than editors like VS Code, so this port uses a reduced subset of the full Coldark palette. It focuses on frames, toolbars, selected tabs, fields, icons, and highlight states.

## Colors

| Token | Coldark Cold | Coldark Dark | Role |
| --- | --- | --- | --- |
| `coldark00` | `#f0f4f8` | `#f0f4f8` | Popup, focused field, and elevated button background in Coldark Cold |
| `coldark01` | `#e3eaf2` | `#e3eaf2` | Bright frame/background support in Coldark Cold and default selected-tab foreground in Coldark Dark |
| `coldark02` | `#d0dae7` | `#d0dae7` | Supporting foreground in Coldark Dark |
| `coldark03` | `#8da1b9` | `#8da1b9` | Unused by the current Firefox package |
| `coldark04` | `#3c526d` | `#3c526d` | Popup, focused field, and button-state background in Coldark Dark |
| `coldark05` | `#213043` | `#213043` | Selected tab, toolbar, and sidebar background in Coldark Dark |
| `coldark06` | `#111b27` | `#111b27` | Main foreground in Coldark Cold and main frame background in Coldark Dark |
| `coldark07` | `#0b121b` | `#0b121b` | Inactive frame, highlight, and border background in Coldark Dark |
| `coldark13` | `#005a8e` | `#6cb8e6` | Blue accent for special icons, focus border, selected tab border, tab loading, and field highlight |

## Installation

1. Download the latest `.xpi` from the `web-ext-artifacts` directory in this package.
2. Open `about:addons` in Firefox.
3. Use the add-ons gear menu and choose **Install Add-on From File...**
4. Select the downloaded Coldark package.

## Notes

Some browser surfaces, such as a few hover states or parts of the new tab page, are not fully customizable in Firefox themes.
