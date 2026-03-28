<p align="center">
  <img
    alt=""
    src="https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-assets/banner.png"
    width="400"
  />
</p>

# Coldark - Firefox

![License](https://img.shields.io/github/license/ArmandPhilippot/coldark?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![Package version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark?filename=packages%2Fcoldark-firefox%2Fpackage.json&colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge)

A theme in shades of blue-grey adapted for Firefox.

## Introduction

[Coldark](https://github.com/ArmandPhilippot/coldark/) is a theme in shades of blue-grey, available in dark and light versions. Its colors have been carefully chosen to offer sufficient reading comfort in most situations.

This variant is designed for [Firefox](https://www.mozilla.org/fr/firefox/). Although, Coldark uses 16 colors, the Firefox version only uses 7. Some elements do not seem customizable like the tab hover or the search box on the new tab page.

## Features

- Detects if the user prefers the dark theme and automatically applies the dark version.
- Allows you to switch between versions using an icon in the navigation bar.
- Allows you to switch between versions using a shortcut (defaults to <kbd>Alt+T</kbd>).

If the shortcut doesn't work, check that it's not being used by another extension. If necessary, replace the shortcut either for Coldark or for the other extension.

## Colors

### Light Theme

| Hex Code  |       Preview       | Description                                                                                               | Denomination |
| :-------: | :-----------------: | --------------------------------------------------------------------------------------------------------- | :----------: |
| `#e3eaf2` | ![#e3eaf2][#e3eaf2] | **Default background** - Frame, new tab page, fields                                                      | `coldark00`  |
| `#d0dae7` | ![#d0dae7][#d0dae7] | **Dark background** - Selected tab, toolbar, sidebar                                                      | `coldark01`  |
| `#8da1b9` | ![#8da1b9][#8da1b9] | **Darker background** - Inactive frame, highlight, borders                                                | `coldark02`  |
| `#213043` | ![#213043][#213043] | **Lighter foreground** – Icons, new tab page, popup, highlight, fields, inactive tab.                     | `coldark04`  |
| `#111b27` | ![#111b27][#111b27] | **Default foreground** - Selected tab, toolbar                                                            | `coldark05`  |
| `#f0f4f8` | ![#f0f4f8][#f0f4f8] | **Lighter background** – Popup, focused fields, buttons states                                            | `coldark07`  |
| `#005a8e` | ![#005a8e][#005a8e] | **Blue** - Special icons (e.g. bookmark), focus border, selected tab border, tab loading, field highlight | `coldark10`  |

### Dark Theme

| Hex Code  |       Preview       | Description                                                                                               | Denomination |
| :-------: | :-----------------: | --------------------------------------------------------------------------------------------------------- | :----------: |
| `#111b27` | ![#111b27][#111b27] | **Default background** – Frame, new tab page, fields                                                      | `coldark00`  |
| `#213043` | ![#213043][#213043] | **Light background** - Selected tab, toolbar, sidebar                                                     | `coldark01`  |
| `#3c526d` | ![#3c526d][#3c526d] | **Lighter background** - Popup, focused fields, buttons states                                            | `coldark02`  |
| `#d0dae7` | ![#d0dae7][#d0dae7] | **Dark foreground** – Icons, new tab page, popup, highlight, fields, inactive tab.                        | `coldark04`  |
| `#e3eaf2` | ![#e3eaf2][#e3eaf2] | **Default foreground** - Selected tab, toolbar                                                            | `coldark05`  |
| `#0b121b` | ![#0b121b][#0b121b] | **Dark background** - Inactive frame, highlight, borders                                                  | `coldark07`  |
| `#6cb8e6` | ![#6cb8e6][#6cb8e6] | **Blue** - Special icons (e.g. bookmark), focus border, selected tab border, tab loading, field highlight | `coldark10`  |

## Screenshots

| Light theme | Dark theme |
| :---------: | :--------: |
| ![Screenshot of Firefox homepage using Coldark Cold](./assets/img/coldark-cold-firefox.jpg) | ![Screenshot of Firefox homepage using Coldark Dark](./assets/img/coldark-dark-firefox.jpg) |

## How to install

1. Download the latest version of Coldark for Firefox from the `web-ext-artifacts` directory.
2. Open the Addons menu (e.g. `about:addons`)
3. Click on the gear icon next to <kbd><samp>Manage Your Extensions
</samp></kbd>, then select <kbd><samp>Install Add-on From File...
</samp></kbd>.
4. Find and select the `.xpi` file downloaded at step 1 (e.g. `coldark-1.0.3-an+fx.xpi`).

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

[#005a8e]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/light-accents/005a8e.svg

<!-- Syntax - Dark Theme Colors -->

[#6cb8e6]: https://raw.githubusercontent.com/ArmandPhilippot/coldark/refs/heads/main/packages/coldark-assets/colors/dark-accents/6cb8e6.svg
