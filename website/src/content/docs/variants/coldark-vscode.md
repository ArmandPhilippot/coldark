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

This package is the reference implementation for Coldark. The main [Colors](/colors/) page documents the shared palette, and the tables below keep the package-specific wording from the VS Code variant.

### Coldark Cold

| Token | Hex | Role |
| --- | --- | --- |
| `coldark00` | `#e3eaf2` | Default background. Also used as foreground for button and badges |
| `coldark01` | `#d0dae7` | Dark background for editor gutter, inputs, line highlight, status bar without folder, and no-tabs layout. Also used as activity bar foreground |
| `coldark02` | `#8da1b9` | Selection background, code blocks, secondary buttons, and borders |
| `coldark03` | `#3c526d` | Comments, invisible text, ignored items, and placeholders |
| `coldark04` | `#213043` | Light foreground for inputs, status bar without folder, embedded modals, and widgets |
| `coldark05` | `#111b27` | Default foreground, shadow, and most punctuation |
| `coldark06` | `#0b121b` | Dark foreground and activity bar background |
| `coldark07` | `#f0f4f8` | Light background for active tabs, embedded modals, and widgets |
| `coldark08` | `#006d6d` | Cyan for merge incoming content, parameters, tags, CSS variables, inline raw markup, and embedded section punctuation |
| `coldark09` | `#755f00` | Yellow for modified states, hints, integers, booleans, language constants, attribute names, shell case patterns, and link URLs |
| `coldark10` | `#005a8e` | Blue for badges, buttons, find match, info states, merge current content, selection outside editor, open-folder status bar, namespaces, classes, variables, other constants, headings, and property names |
| `coldark11` | `#116b00` | Green for additions, strings, CSS colors, CSS font names, and link text |
| `coldark12` | `#af00af` | Magenta for untracked states, token expression values, regex, escapes, character constants, storage modifiers, instances, list punctuation, and CSS values |
| `coldark13` | `#7c00aa` | Purple for unverified states, functions, and CSS classes or IDs |
| `coldark14` | `#a04900` | Orange for warnings, debugging status bar, keywords, storage, and CSS pseudo-elements |
| `coldark15` | `#c22f2e` | Red for errors, deletions, invalid states, and deprecated items |

### Coldark Dark

| Token | Hex | Role |
| --- | --- | --- |
| `coldark00` | `#111b27` | Default background. Also used as foreground for button and badges |
| `coldark01` | `#213043` | Light background for embedded modals, widgets, line highlight, and active tabs |
| `coldark02` | `#3c526d` | Selection background, code blocks, secondary buttons, and some highlighting |
| `coldark03` | `#8da1b9` | Comments, invisible text, ignored items, and placeholders |
| `coldark04` | `#d0dae7` | Dark foreground for activity bar, inputs, status bar without folder, embedded modals, and widgets |
| `coldark05` | `#e3eaf2` | Default foreground and most punctuation |
| `coldark06` | `#f0f4f8` | Light foreground for menus and tab hover states |
| `coldark07` | `#0b121b` | Dark background for activity bar, inputs, status bar without folder, editor gutter, no-tabs layout, and borders |
| `coldark08` | `#66cccc` | Cyan for merge incoming content, parameters, tags, CSS variables, inline raw markup, and embedded section punctuation |
| `coldark09` | `#e6d37a` | Yellow for modified states, hints, integers, booleans, language constants, attribute names, shell case patterns, and link URLs |
| `coldark10` | `#6cb8e6` | Primary interactive accent in both variants. Reused for badges, buttons, find match, info states, merge current content, selection outside editor, open-folder status bar, namespaces, classes, variables, other constants, headings, and property names |
| `coldark11` | `#91d076` | Green for additions, strings, CSS colors, CSS font names, and link text |
| `coldark12` | `#f4adf4` | Magenta for untracked states, token expression values, regex, escapes, character constants, storage modifiers, instances, list punctuation, and CSS values |
| `coldark13` | `#c699e3` | Purple for unverified states, functions, and CSS classes or IDs |
| `coldark14` | `#e9ae7e` | Orange for warnings, debugging status bar, keywords, storage, and CSS pseudo-elements |
| `coldark15` | `#cd6660` | Red for errors, deletions, invalid states, and deprecated items |

## Implementation notes

The current VS Code theme files confirm a few useful maintenance patterns:

- `coldark02` and `coldark03` intentionally swap emphasis between the two variants: in the cold theme, `coldark02` is the stronger selection surface and `coldark03` is the subdued comment color; in the dark theme, that relationship stays the same semantically, but the values move upward in brightness.
- `coldark07` is one of the most structurally important differences between the variants. In Coldark Cold it is a lighter surface color for active tabs and widgets, while in Coldark Dark it becomes the deepest structural background used for borders, gutters, and other heavy UI chrome.
- `coldark06` is not symmetrical either. In Coldark Cold it behaves like a darker foreground and activity-bar background, while in Coldark Dark it is a lighter foreground mainly used for menus and hover states.

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
