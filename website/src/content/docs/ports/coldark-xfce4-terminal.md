---
title: XFCE4 Terminal
description: Coldark terminal presets for XFCE4 Terminal.
---

Coldark for XFCE4 Terminal brings the palette to terminal surfaces with dedicated presets for both main variants.

## Highlights

- Designed for [XFCE4 Terminal](https://gitlab.xfce.org/apps/xfce4-terminal).
- Ships `coldark-cold.theme` and `coldark-dark.theme`.
- Uses a reduced terminal-friendly subset of the full Coldark color system.

## Colors

The XFCE4 Terminal port uses a compact subset of the Coldark palettes. Compared with VS Code, it keeps fewer semantic accents and focuses on the colors that matter most in a terminal palette.

### Coldark Cold

This preset uses `#e3eaf2`, `#111b27`, `#0b121b`, `#d0dae7`, `#8da1b9`, and `#3c526d` for terminal surfaces and neutral text, then adds `#005a8e`, `#006d6d`, `#116b00`, `#755f00`, `#af00af`, and `#c22f2e` for the terminal accent slots.

### Coldark Dark

This preset uses `#111b27`, `#e3eaf2`, `#f0f4f8`, `#8da1b9`, and `#3c526d` for terminal surfaces and neutral text, then adds `#6cb8e6`, `#66cccc`, `#91d076`, `#e6d37a`, `#f4adf4`, and `#cd6660` for the terminal accent slots.

## Installation

1. Create `~/.local/share/xfce4/terminal/colorschemes/` if needed.
2. Copy `coldark-cold.theme` and/or `coldark-dark.theme` into that directory.

## Activation

1. Open XFCE4 Terminal.
2. Go to **Edit** > **Preferences**.
3. Open the **Colors** tab.
4. Load either **Coldark - Cold** or **Coldark - Dark** from the presets menu.
