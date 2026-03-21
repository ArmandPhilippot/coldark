<p align="center">
  <img
    alt="Coldark Banner"
    src="https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-assets/banner.png"
    width="400"
  />
</p>

# Coldark - VS Code

![License](https://img.shields.io/github/license/ArmandPhilippot/coldark?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![Package version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark?filename=packages%2Fcoldark-vscode%2Fpackage.json&colorA=111b27&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/ArmandPhilippot.coldark-vscode?colorA=213043&color=d0dae7&logo=visual-studio-code&logoColor=e3eaf2&style=for-the-badge) ![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/ArmandPhilippot.coldark-vscode?colorA=213043&color=d0dae7&logo=visual-studio-code&logoColor=e3eaf2&style=for-the-badge&label=VS%20Code%20Downloads) ![Open VSX Downloads](https://img.shields.io/badge/dynamic/json?label=Open%20VSX%20Downloads&query=downloadCount&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2Farmandphilippot%2Fcoldark-vscode&colorA=213043&color=d0dae7&style=for-the-badge&logo=github&logoColor=e3eaf2)

An optimized theme for web development that comes with two versions: light & dark.

## Presentation

[Coldark](https://github.com/ArmandPhilippot/coldark/) is a gray-blue theme. The colors used respect the Web Content Accessibility Guidelines (WCAG) in order to provide sufficient reading comfort. However, with opacity, it is possible that some contrasts are diminished and that they are above level AA.

## Colors

Coldark consists of three color palettes. The first is common to both versions. The other two each apply to a version.

I tried to keep the same descriptions for both versions. However, for complex themes like VS Code, it doesn't work. So I separated the descriptions into 2 sections:

- Light Theme (Cold)
- Dark Theme (Dark)

### Light Theme

| Hex Code  |       Preview       | Description                                                                                                                                                                                                 | Denomination |
| :-------: | :-----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |
| `#e3eaf2` | ![#e3eaf2][#e3eaf2] | **Default background** – Also used as foreground for Button & Badges.                                                                                                                                       | `coldark00`  |
| `#d0dae7` | ![#d0dae7][#d0dae7] | **Dark background** - Editor Gutter, Inputs, Line Highlight, Status bar (no folder), No tabs. Also used as foreground for Activity bar.                                                                     | `coldark01`  |
| `#8da1b9` | ![#8da1b9][#8da1b9] | **Selection background** - Code block, Secondary buttons, Some highlighting. Also used for Borders.                                                                                                         | `coldark02`  |
| `#3c526d` | ![#3c526d][#3c526d] | **Comments** - Invisible, Ignored, Placeholder.                                                                                                                                                             | `coldark03`  |
| `#213043` | ![#213043][#213043] | **Light foreground** – Inputs, Status bar (no folder), Embedded modals & Widgets.                                                                                                                           | `coldark04`  |
| `#111b27` | ![#111b27][#111b27] | **Default foreground** - Also used as Shadow and for most of Punctuation.                                                                                                                                   | `coldark05`  |
| `#0b121b` | ![#0b121b][#0b121b] | **Dark foreground** – Also used as background for Activity bar.                                                                                                                                             | `coldark06`  |
| `#f0f4f8` | ![#f0f4f8][#f0f4f8] | **Light background** – Tab active, Embedded modals, Widgets.                                                                                                                                                | `coldark07`  |
| `#006d6d` | ![#006d6d][#006d6d] | **Cyan** - Merge incoming content, Parameters, Tags, Support constant, CSS Variables, Markup inline raw, Punctuation Section Embedded (e.g. `<?php ?>`)                                                     | `coldark08`  |
| `#755f00` | ![#755f00][#755f00] | **Yellow** - Modified, Hints, Integers, Boolean, Constants Language, Attribute Names, Shell Case Patterns, Markup Link URL                                                                                  | `coldark09`  |
| `#005a8e` | ![#005a8e][#005a8e] | **Blue** - Badges, Buttons, Find Match, Info, Merge current content, Selection (outside editor), Status bar (folder open), Namespaces, Classes, Variables, Constants Other, Markup Headings, Property names | `coldark10`  |
| `#116b00` | ![#116b00][#116b00] | **Green** - Added elements, Strings, CSS Colors, CSS Font names, Markup Link Text                                                                                                                           | `coldark11`  |
| `#af00af` | ![#af00af][#af00af] | **Magenta** - Untracked elements, Token Expression value Support, Regular Expressions, Escape Characters, Constant Characters, Storage Modifiers, Instances, Markup List Punctuation, CSS values            | `coldark12`  |
| `#7c00aa` | ![#7c00aa][#7c00aa] | **Purple** - Unverified, Functions, CSS Classes & IDs                                                                                                                                                       | `coldark13`  |
| `#a04900` | ![#a04900][#a04900] | **Orange** - Warnings, Status bar (debugging), Keywords, Storage, CSS Pseudo elements                                                                                                                       | `coldark14`  |
| `#c22f2e` | ![#c22f2e][#c22f2e] | **Red** - Errors, Deleted, Invalids, Deprecated                                                                                                                                                             | `coldark15`  |

### Dark Theme

| Hex Code  |       Preview       | Description                                                                                                                                                                                                 | Denomination |
| :-------: | :-----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |
| `#111b27` | ![#111b27][#111b27] | **Default background** – Also used as foreground for Button & Badges.                                                                                                                                       | `coldark00`  |
| `#213043` | ![#213043][#213043] | **Light background** - Embedded modals, Widgets, Line Highlight, Tab active.                                                                                                                                | `coldark01`  |
| `#3c526d` | ![#3c526d][#3c526d] | **Selection background** - Code block, Secondary buttons, Some highlighting.                                                                                                                                | `coldark02`  |
| `#8da1b9` | ![#8da1b9][#8da1b9] | **Comments** - Invisible, Ignored, Placeholder.                                                                                                                                                             | `coldark03`  |
| `#d0dae7` | ![#d0dae7][#d0dae7] | **Dark foreground** – Activity bar, Inputs, Status bar (no folder), Embedded modals & Widgets.                                                                                                              | `coldark04`  |
| `#e3eaf2` | ![#e3eaf2][#e3eaf2] | **Default foreground** - Also used for most of Punctuation.                                                                                                                                                 | `coldark05`  |
| `#f0f4f8` | ![#f0f4f8][#f0f4f8] | **Light foreground** – Menu, Tab hover.                                                                                                                                                                     | `coldark06`  |
| `#0b121b` | ![#0b121b][#0b121b] | **Dark background** - Activity bar, Inputs, Status bar (no folder), Editor Gutter, No tabs. Also used for Borders.                                                                                          | `coldark07`  |
| `#66cccc` | ![#66cccc][#66cccc] | **Cyan** - Merge incoming content, Parameters, Tags, Support constant, CSS Variables, Markup inline raw, Punctuation Section Embedded (e.g. `<?php ?>`)                                                     | `coldark08`  |
| `#e6d37a` | ![#e6d37a][#e6d37a] | **Yellow** - Modified, Hints, Integers, Boolean, Constants Language, Attribute Names, Shell Case Patterns, Markup Link URL                                                                                  | `coldark09`  |
| `#6cb8e6` | ![#6cb8e6][#6cb8e6] | **Blue** - Badges, Buttons, Find Match, Info, Merge current content, Selection (outside editor), Status bar (folder open), Namespaces, Classes, Variables, Constants Other, Markup Headings, Property names | `coldark10`  |
| `#91d076` | ![#91d076][#91d076] | **Green** - Added elements, Strings, CSS Colors, CSS Font names, Markup Link Text                                                                                                                           | `coldark11`  |
| `#f4adf4` | ![#f4adf4][#f4adf4] | **Magenta** - Untracked elements, Token Expression value Support, Regular Expressions, Escape Characters, Constant Characters, Storage Modifiers, Instances, Markup List Punctuation, CSS values            | `coldark12`  |
| `#c699e3` | ![#c699e3][#c699e3] | **Purple** - Unverified, Functions, CSS Classes & IDs                                                                                                                                                       | `coldark13`  |
| `#e9ae7e` | ![#e9ae7e][#e9ae7e] | **Orange** - Warnings, Status bar (debugging), Keywords, Storage, CSS Pseudo elements                                                                                                                       | `coldark14`  |
| `#cd6660` | ![#cd6660][#cd6660] | **Red** - Errors, Deleted, Invalids, Deprecated                                                                                                                                                             | `coldark15`  |

## Screenshots

On Linux, the title bar and the menu are not customizable. The following screenshots were taken on Windows.

### Cold

[![Coldark Cold](./assets/coldark-cold.jpg)](./assets/coldark-cold.jpg)

| PHP                                                                                 | CSS                                                                                 | JS                                                                               |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [![Coldark Cold PHP](./assets/coldark-cold-php.jpg)](./assets/coldark-cold-php.jpg) | [![Coldark Cold CSS](./assets/coldark-cold-css.jpg)](./assets/coldark-cold-css.jpg) | [![Coldark Cold JS](./assets/coldark-cold-js.jpg)](./assets/coldark-cold-js.jpg) |

### Dark

[![Coldark Dark](./assets/coldark-dark.jpg)](./assets/coldark-dark.jpg)

| PHP                                                                                 | CSS                                                                                 | JS                                                                               |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [![Coldark Dark PHP](./assets/coldark-dark-php.jpg)](./assets/coldark-dark-php.jpg) | [![Coldark Dark CSS](./assets/coldark-dark-css.jpg)](./assets/coldark-dark-css.jpg) | [![Coldark Dark JS](./assets/coldark-dark-js.jpg)](./assets/coldark-dark-js.jpg) |

## Install

Coldark for VS Code can be installed via the extension manager by searching for "_Coldark_".

Coldark is available in the [VisualStudio Marketplace](https://marketplace.visualstudio.com/items?itemName=ArmandPhilippot.coldark) and in the [Open VSX Registry](https://open-vsx.org/extension/armandphilippot/coldark). So, you can install it in VS Code, Code - OSS and VSCodium.

## Disclaimer

- I tested the theme on Linux (Manjaro) and Windows, but not on Mac.
- I do not use all the features of VS Code: it is possible that some elements are not correctly incorporated within the theme.
- I have not tested the versions with all possible languages, only with those that I use commonly.

I added a file named [UNUSED.md](https://github.com/ArmandPhilippot/coldark-vscode/blob/master/UNUSED.md) to specify the unused settings.

Tested with:

- HTML
- CSS / SCSS
- Javascript / JSX
- Typescript / TSX
- JSON
- PHP
- Markdown
- Bash script

## License

This project is open source and available under the [MIT License](https://github.com/ArmandPhilippot/coldark/blob/main/LICENSE).

<!-- REFERENCES -->

<!-- UI Colors -->

[#f0f4f8]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/f0f4f8.svg
[#e3eaf2]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/e3eaf2.svg
[#d0dae7]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/d0dae7.svg
[#8da1b9]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/8da1b9.svg
[#3c526d]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/3c526d.svg
[#213043]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/213043.svg
[#111b27]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/111b27.svg
[#0b121b]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/common-shades/0b121b.svg

<!-- Syntax - Light Theme Colors -->

[#c22f2e]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/c22f2e.svg
[#116b00]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/116b00.svg
[#755f00]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/755f00.svg
[#005a8e]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/005a8e.svg
[#af00af]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/af00af.svg
[#006d6d]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/006d6d.svg
[#7c00aa]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/7c00aa.svg
[#a04900]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/light-accents/a04900.svg

<!-- Syntax - Dark Theme Colors -->

[#cd6660]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/cd6660.svg
[#91d076]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/91d076.svg
[#e6d37a]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/e6d37a.svg
[#6cb8e6]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/6cb8e6.svg
[#f4adf4]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/f4adf4.svg
[#66cccc]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/66cccc.svg
[#c699e3]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/c699e3.svg
[#e9ae7e]: https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/colors/dark-accents/e9ae7e.svg
