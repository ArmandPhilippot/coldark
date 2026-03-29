---
title: VS Code
description: The reference Coldark implementation for Visual Studio Code.
---

Coldark for VS Code is the reference implementation of the theme. It defines the shared semantic palette used across the rest of the project and ships both **Coldark Cold** and **Coldark Dark**.

## Highlights

- Designed for Visual Studio Code, Code - OSS, and VSCodium.
- Uses the full Coldark palette with dedicated light and dark theme files.
- Aims for comfortable contrast while keeping a cohesive blue-grey look.

## Available themes

- `Coldark - Cold`
- `Coldark - Dark`

## Colors

This package is the reference implementation for Coldark. The main [Colors](../../colors/) page documents the shared palette, and the tables below keep the package-specific wording from the VS Code port.

### Common shades

| Token | Hex | Role |
| --- | --- | --- |
| `coldark00` | `#f0f4f8` | Lightest surface for active tabs, widgets, and elevated panels |
| `coldark01` | `#e3eaf2` | Bright surface in Coldark Cold and default foreground in Coldark Dark |
| `coldark02` | `#d0dae7` | Secondary surface and supporting foreground |
| `coldark03` | `#8da1b9` | Selection background, borders, comments, and muted emphasis |
| `coldark04` | `#3c526d` | Subdued text and softer highlights |
| `coldark05` | `#213043` | Strong surface for widgets, line highlight, and embedded panels |
| `coldark06` | `#111b27` | Main dark foreground in Coldark Cold and main editor background in Coldark Dark |
| `coldark07` | `#0b121b` | Deep background for activity bar, gutters, borders, and heavy chrome |

### Accent slots

| Token | Coldark Cold | Coldark Dark | Role |
| --- | --- | --- | --- |
| `coldark08` | `#c22f2e` | `#cd6660` | Red for errors, deletions, invalid states, and deprecated items |
| `coldark09` | `#a04900` | `#e9ae7e` | Orange for warnings, debugging status bar, keywords, storage, and CSS pseudo-elements |
| `coldark10` | `#755f00` | `#e6d37a` | Yellow for modified states, hints, integers, booleans, language constants, attribute names, shell case patterns, and link URLs |
| `coldark11` | `#116b00` | `#91d076` | Green for additions, strings, CSS colors, CSS font names, and link text |
| `coldark12` | `#006d6d` | `#66cccc` | Cyan for merge incoming content, parameters, tags, CSS variables, inline raw markup, and embedded section punctuation |
| `coldark13` | `#005a8e` | `#6cb8e6` | Blue for badges, buttons, find match, info states, merge current content, selection outside editor, open-folder status bar, namespaces, classes, variables, other constants, headings, and property names |
| `coldark14` | `#7c00aa` | `#c699e3` | Purple for unverified states, functions, and CSS classes or IDs |
| `coldark15` | `#af00af` | `#f4adf4` | Magenta for untracked states, token expression values, regex, escapes, character constants, storage modifiers, instances, list punctuation, and CSS values |

## Implementation notes

The current VS Code theme files confirm a few useful maintenance patterns:

- `coldark00` to `coldark07` form a shared neutral ramp from lightest to darkest, even though each variant assigns those shades to different UI roles.
- `coldark06` and `coldark07` carry much of the structural contrast in the Dark variant, while `coldark00` and `coldark01` do the same for elevated surfaces in the Cold variant.
- `coldark08` to `coldark15` stay stable by hue across both variants, which makes ports easier because contributors can reason about accent intent separately from light/dark adaptation.

## Syntax highlighting patterns

Looking at `tokenColors` specifically, the theme strongly favors the same accent trio in both variants:

- blue is the main structural syntax accent for classes, variables, properties, and headings
- cyan is heavily used for parameters, tags, support constants, and embedded punctuation
- magenta covers regex, escape sequences, special values, and other high-visibility token categories

That pattern is helpful when adding new scopes: if a new token feels like a name or navigational target, it usually belongs near blue; if it behaves like embedded syntax or tag structure, cyan is often the better fit; if it represents a special value or escape-like construct, magenta is usually consistent with the existing grammar.

## Maintenance checklist

When updating the VS Code theme, these are good things to verify:

- keep semantic pairs aligned between `coldark-light-color-theme.json` and `coldark-dark-color-theme.json`
- check both `colors` and `tokenColors`, because a color can be consistent in the UI layer but drift in syntax scopes
- review opacity-based surfaces separately, since they are the most likely places for contrast regressions
- test at least one file with markup, one stylesheet, and one programming language before considering a palette change complete

## Installation

Install the extension from either marketplace:

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ArmandPhilippot.coldark-vscode)
- [Open VSX Registry](https://open-vsx.org/extension/armandphilippot/coldark-vscode)

Then search for `Coldark` in the extensions view and select the variant you want in the theme picker.
