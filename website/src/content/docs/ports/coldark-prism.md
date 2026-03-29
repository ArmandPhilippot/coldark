---
title: Prism
description: Coldark syntax highlighting for Prism.js.
---

Coldark Prism brings the same blue-grey language to Prism.js with a cold and a dark stylesheet.

## Highlights

- Built for [Prism.js](https://prismjs.com/).
- Offers both `prism-coldark-cold.css` and `prism-coldark-dark.css`.
- Stays visually close to the VS Code variant while adapting to Prism's token set.

## Colors

Prism uses a syntax-focused subset of the Coldark palettes. It keeps the main foreground, comment, and accent colors, while skipping many interface-specific colors that only exist in editors.

### Coldark Cold

| Hex | Typical role |
| --- | --- |
| `#e3eaf2` | Background contrast and bright text support |
| `#d0dae7` | Secondary surfaces |
| `#111b27` | Main code foreground |
| `#8da1b9` | Secondary emphasis and soft highlights |
| `#3c526d` | Comments |
| `#005a8e` | Names, classes, and strong accents |
| `#006d6d` | Tags and embedded punctuation |
| `#116b00` | Strings |
| `#755f00` | Numbers and booleans |
| `#af00af` | Regex, escapes, and special values |
| `#7c00aa` | Functions and selectors |
| `#a04900` | Keywords |
| `#c22f2e` | Errors and invalid tokens |

### Coldark Dark

| Hex | Typical role |
| --- | --- |
| `#111b27` | Background |
| `#0b121b` | Deeper surface contrast |
| `#e3eaf2` | Main code foreground |
| `#8da1b9` | Comments and subdued text |
| `#3c526d` | Secondary surfaces and soft highlights |
| `#6cb8e6` | Names, classes, and strong accents |
| `#66cccc` | Tags and embedded punctuation |
| `#91d076` | Strings |
| `#e6d37a` | Numbers and booleans |
| `#f4adf4` | Regex, escapes, and special values |
| `#c699e3` | Functions and selectors |
| `#e9ae7e` | Keywords |
| `#cd6660` | Errors and invalid tokens |

## Installation

1. Download Prism from the [official website](https://prismjs.com/) with the languages and plugins you need.
2. Copy `prism-coldark-cold.css` and/or `prism-coldark-dark.css` from this package into your project.
3. Include the Prism JavaScript file and the selected Coldark stylesheet in your page.

## Notes

The Prism token model is less comprehensive than VS Code's, so some mappings are necessarily approximate.
