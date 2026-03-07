<p align="center">
  <img
    alt="Coldark Banner"
    src="https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/banner.png"
    width="400"
  />
</p>

# Coldark Firefox

![GitHub License](https://img.shields.io/github/license/ArmandPhilippot/coldark-firefox?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![GitHub package.json version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark-firefox?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge)

An optimized theme for web development that comes with two versions: light & dark.

## Presentation

Coldark is a gray-blue theme. The colors used respect the Web Content Accessibility Guidelines (WCAG) in order to provide sufficient reading comfort. However, with opacity, it is possible that some contrasts are diminished and that they are above level AA.

This version is designed for [Firefox](https://www.mozilla.org/fr/firefox/).

## Colors

Coldark consists of three color palettes. The first is common to both versions. The other two each apply to a version.

In Coldark for Firefox, each versions only use 7 colors. Some elements do not seem customizable like the tab hover or the search box on the new tab page.

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

## Features

- Detect if user prefer dark scheme and apply dark version.
- Icon in navbar for switch between versions.
- Shortcut (default: `Alt+T`) for switch between versions.

If the shortcut doesn't work, make sure it is not used by another extension. If so, change it to either Coldark or the other extension.

## Screenshots

|                          Cold                          |                          Dark                          |
| :----------------------------------------------------: | :----------------------------------------------------: |
| ![Coldark Cold](./assets/img/coldark-cold-firefox.jpg) | ![Coldark Dark](./assets/img/coldark-dark-firefox.jpg) |

## Install

1. Download Coldark for Firefox. The `xpi` file is in the folder `web-ext-artifacts`.
2. Open Addons menu (e.g. `about:addons`)
3. Select "_Extensions_"
4. Click on the gear icon ; you should see "_Install Add-on from file..._"
5. Select the `xpi` file

![Install Coldark Firefox](./assets/img/install-coldark-firefox.jpg)

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
