<p align="center">
  <img
    alt=""
    src="https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-assets/banner.png"
    width="400"
  />
</p>

# Coldark - VS Code

![License](https://img.shields.io/github/license/ArmandPhilippot/coldark?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![Package version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark?filename=packages%2Fcoldark-vscode%2Fpackage.json&colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/ArmandPhilippot.coldark-vscode?colorA=213043&color=d0dae7&logo=visual-studio-code&logoColor=e3eaf2&style=for-the-badge) ![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/ArmandPhilippot.coldark-vscode?colorA=213043&color=d0dae7&logo=visual-studio-code&logoColor=e3eaf2&style=for-the-badge&label=VS%20Code%20Downloads) ![Open VSX Downloads](https://img.shields.io/badge/dynamic/json?label=Open%20VSX%20Downloads&query=downloadCount&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2Farmandphilippot%2Fcoldark-vscode&colorA=213043&color=d0dae7&style=for-the-badge&logo=github&logoColor=e3eaf2)

A theme in shades of blue-grey adapted for Visual Studio Code.

## Introduction

[Coldark](https://github.com/ArmandPhilippot/coldark/) is a theme in shades of blue-grey, available in dark and light versions. Its colors have been carefully chosen to offer sufficient reading comfort in most situations.

This variant is designed for [Visual Studio Code](https://code.visualstudio.com/). The colors have been chosen to comply with Web Content Accessibility Guidelines (WCAG), but in some contexts (e.g., opacity), certain contrasts may be reduced and fall below AA level. This variant should nevertheless offer sufficient reading comfort in most situations.

## Screenshots

### Coldark Cold

[![Screenshot of VS Code homepage using Coldark Cold](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold.jpg)

| PHP | CSS | JS  |
| :-: | :-: | :-: |
| [![Screenshot of a PHP file opened in VS Code with the Coldark Cold theme](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold-php.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold-php.jpg) | [![Screenshot of a CSS file opened in VS Code with the Coldark Cold theme](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold-css.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold-css.jpg) | [![Screenshot of a JS file opened in VS Code with the Coldark Cold theme](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold-js.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-cold-js.jpg) |

### Coldark Dark

[![Screenshot of VS Code homepage using Coldark Dark](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark.jpg)

| PHP | CSS | JS  |
| :-: | :-: | :-: |
| [![Screenshot of a PHP file opened in VS Code with the Coldark Dark theme](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark-php.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark-php.jpg) | [![Screenshot of a CSS file opened in VS Code with the Coldark Dark theme](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark-css.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark-css.jpg) | [![Screenshot of a JS file opened in VS Code with the Coldark Dark theme](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark-js.jpg)](https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-vscode/assets/coldark-dark-js.jpg) |

## Colors

`coldark00` to `coldark07` are the fixed shared neutral ramp, ordered from the lightest common shade to the darkest.

`coldark08` to `coldark15` are fixed accent slots by hue, with one value for Coldark Cold and another for Coldark Dark.

### Common shades

| Denomination | Hex Code | Preview | Usage in VS Code |
| :----------: | :------: | :-----: | ---------------- |
| `coldark00` | `#f0f4f8` | ![#f0f4f8][#f0f4f8] | Lightest surfaces such as active tabs, widgets, and elevated panels |
| `coldark01` | `#e3eaf2` | ![#e3eaf2][#e3eaf2] | Bright backgrounds in Coldark Cold and the default foreground in Coldark Dark |
| `coldark02` | `#d0dae7` | ![#d0dae7][#d0dae7] | Soft foregrounds and secondary surfaces |
| `coldark03` | `#8da1b9` | ![#8da1b9][#8da1b9] | Selection backgrounds, borders, and muted emphasis |
| `coldark04` | `#3c526d` | ![#3c526d][#3c526d] | Comments, placeholders, and subdued text |
| `coldark05` | `#213043` | ![#213043][#213043] | Strong surfaces like widgets and line highlights |
| `coldark06` | `#111b27` | ![#111b27][#111b27] | Main dark foreground in Coldark Cold and main background in Coldark Dark |
| `coldark07` | `#0b121b` | ![#0b121b][#0b121b] | Deep structural background for activity bars, gutters, and borders |

### Accent colors

| Denomination | Coldark Cold | Coldark Dark | Preview | Usage in VS Code |
| :----------: | :----------: | :----------: | :-----: | ---------------- |
| `coldark08` | `#c22f2e` | `#cd6660` | ![#c22f2e][#c22f2e] / ![#cd6660][#cd6660] | Red for errors, deletions, invalid states, and deprecated items |
| `coldark09` | `#a04900` | `#e9ae7e` | ![#a04900][#a04900] / ![#e9ae7e][#e9ae7e] | Orange for warnings, debugging status bar, keywords, storage, and CSS pseudo-elements |
| `coldark10` | `#755f00` | `#e6d37a` | ![#755f00][#755f00] / ![#e6d37a][#e6d37a] | Yellow for modified states, hints, integers, booleans, language constants, attribute names, shell case patterns, and link URLs |
| `coldark11` | `#116b00` | `#91d076` | ![#116b00][#116b00] / ![#91d076][#91d076] | Green for additions, strings, CSS colors, CSS font names, and link text |
| `coldark12` | `#006d6d` | `#66cccc` | ![#006d6d][#006d6d] / ![#66cccc][#66cccc] | Cyan for merge incoming content, parameters, tags, CSS variables, inline raw markup, and embedded section punctuation |
| `coldark13` | `#005a8e` | `#6cb8e6` | ![#005a8e][#005a8e] / ![#6cb8e6][#6cb8e6] | Blue for badges, buttons, find match, info states, merge current content, selection outside editor, classes, variables, and headings |
| `coldark14` | `#7c00aa` | `#c699e3` | ![#7c00aa][#7c00aa] / ![#c699e3][#c699e3] | Purple for unverified states, functions, and CSS classes or IDs |
| `coldark15` | `#af00af` | `#f4adf4` | ![#af00af][#af00af] / ![#f4adf4][#f4adf4] | Magenta for untracked states, token expression values, regex, escapes, character constants, storage modifiers, instances, list punctuation, and CSS values |

## How to install

Coldark for VS Code can be installed via the extension manager by searching for "_Coldark_".

Coldark is available in the [VisualStudio Marketplace](https://marketplace.visualstudio.com/items?itemName=ArmandPhilippot.coldark-vscode) and in the [Open VSX Registry](https://open-vsx.org/extension/armandphilippot/coldark-vscode). So, you can install it in VS Code, Code - OSS, and VSCodium.

## Disclaimer

- I tested the theme on Linux (Manjaro) and Windows, but not on Mac.
- I do not use all the features of VS Code: it is possible that the theme is not suitable for certain elements.
- I have not tested the versions with all possible languages, only with those that I use commonly (e.g. HTML, CSS, Typescript).

## License

This project is open source and available under the [MIT License](https://github.com/ArmandPhilippot/coldark/blob/main/LICENSE).

<!-- REFERENCES -->

<!-- UI Colors -->

[#f0f4f8]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/f0f4f8.svg
[#e3eaf2]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/e3eaf2.svg
[#d0dae7]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/d0dae7.svg
[#8da1b9]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/8da1b9.svg
[#3c526d]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/3c526d.svg
[#213043]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/213043.svg
[#111b27]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/111b27.svg
[#0b121b]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/common-shades/0b121b.svg

<!-- Syntax - Light Theme Colors -->

[#c22f2e]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/c22f2e.svg
[#116b00]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/116b00.svg
[#755f00]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/755f00.svg
[#005a8e]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/005a8e.svg
[#af00af]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/af00af.svg
[#006d6d]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/006d6d.svg
[#7c00aa]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/7c00aa.svg
[#a04900]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/a04900.svg

<!-- Syntax - Dark Theme Colors -->

[#cd6660]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/cd6660.svg
[#91d076]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/91d076.svg
[#e6d37a]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/e6d37a.svg
[#6cb8e6]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/6cb8e6.svg
[#f4adf4]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/f4adf4.svg
[#66cccc]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/66cccc.svg
[#c699e3]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/c699e3.svg
[#e9ae7e]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/e9ae7e.svg
