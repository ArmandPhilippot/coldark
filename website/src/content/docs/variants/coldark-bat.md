---
title: bat
description: Coldark syntax highlighting themes for bat.
---

Coldark for bat brings the project to the terminal with two syntax themes that match the Cold and Dark variants.

## Highlights

- Designed for [bat](https://github.com/sharkdp/bat).
- Ships `Coldark-Cold` and `Coldark-Dark`.
- Great fit for terminals that already use other Coldark variants.

## Colors

The bat variant reuses the shared Coldark syntax palette rather than defining package-specific UI colors. It keeps the core foreground and accent colors used for code tokens and leaves out most of the editor-specific surface colors documented on the main [Colors](/colors/) page.

### Coldark Cold

| Hex | Typical role |
| --- | --- |
| `#e3eaf2` | Background contrast and bright text support |
| `#d0dae7` | Secondary background surfaces |
| `#111b27` | Main foreground |
| `#3c526d` | Comments and subdued text |
| `#005a8e` | Classes, variables, headings, and prominent syntax |
| `#006d6d` | Parameters, tags, and embedded punctuation |
| `#116b00` | Strings and additions |
| `#755f00` | Numbers, booleans, hints, and modified states |
| `#af00af` | Regex, escapes, and value-like tokens |
| `#7c00aa` | Functions and selectors |
| `#a04900` | Keywords and warnings |
| `#c22f2e` | Errors and invalid tokens |

### Coldark Dark

| Hex | Typical role |
| --- | --- |
| `#111b27` | Main background |
| `#213043` | Secondary background |
| `#e3eaf2` | Main foreground |
| `#8da1b9` | Comments and subdued text |
| `#0b121b` | Deep background accents |
| `#6cb8e6` | Classes, variables, headings, and prominent syntax |
| `#66cccc` | Parameters, tags, and embedded punctuation |
| `#91d076` | Strings and additions |
| `#e6d37a` | Numbers, booleans, hints, and modified states |
| `#f4adf4` | Regex, escapes, and value-like tokens |
| `#c699e3` | Functions and selectors |
| `#e9ae7e` | Keywords and warnings |
| `#cd6660` | Errors and invalid tokens |

## Installation

1. Create the bat themes directory with `mkdir -p "$(bat --config-dir)/themes"`.
2. Copy the package contents into that folder.
3. Rebuild the bat cache with `bat cache --build`.
4. Verify the themes are available with `bat --list-themes`.

## Activation

Use one of the themes on demand:

```sh
bat --theme="Coldark-Cold"
```

Or make it the default in your shell config:

```sh
export BAT_THEME="Coldark-Dark"
```
