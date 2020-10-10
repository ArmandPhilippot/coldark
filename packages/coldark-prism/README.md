<p align="center">
    <img src="assets/coldark-banner.png" alt="Coldark Banner" width="400" />
</p>

# Coldark - Prism

![GitHub License](https://img.shields.io/github/license/ArmandPhilippot/coldark-prism?colorA=111B27&color=d8e0eb&logo=Github&logoColor=E3E9F2&style=for-the-badge) ![GitHub package.json version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark-prism?colorA=111B27&color=d8e0eb&logo=Github&logoColor=E3E9F2&style=for-the-badge)

An optimized theme for web development that comes with two versions: light & dark.

## Presentation

[Coldark](https://github.com/ArmandPhilippot/coldark) is a gray-blue theme. The colors used respect the Web Content Accessibility Guidelines (WCAG) in order to provide sufficient reading comfort. However, with opacity, it is possible that some contrasts are diminished and that they are above level AA.

This Coldark version is designed for [Prism.js](https://github.com/PrismJS/prism).

## Color pallets

Coldark consists of three color palettes. The first is common to both versions. The other two each apply to a version.

The Prism version uses almost the same colors as [VS code version](https://github.com/ArmandPhilippot/coldark-vscode). The tokens used by Prism are a little different and a little less complete, hence the difference.

## Colors in detail

|                | Light Theme |                                                          | Dark Theme |                                                          |
| -------------- | ----------- | :------------------------------------------------------: | :--------: | :------------------------------------------------------: |
| **Usage code** | **Hex**     |                       **Preview**                        |  **Hex**   |                       **Preview**                        |
| `coldark00`    | `#E3E9F2`   | ![#E3E9F2](https://placehold.it/20/E3E9F2/000000?text=+) | `#111B27`  | ![#111B27](https://placehold.it/20/111B27/000000?text=+) |
| `coldark01`    | `#d8e0eb`   | ![#d8e0eb](https://placehold.it/20/d8e0eb/000000?text=+) | `#0b121b`  | ![#0b121b](https://placehold.it/20/0b121b/000000?text=+) |
| `coldark02`    | `#ccd6e4`   | ![#ccd6e4](https://placehold.it/20/ccd6e4/000000?text=+) | `#304259`  | ![#304259](https://placehold.it/20/304259/000000?text=+) |
| `coldark03`    | `#304259`   | ![#304259](https://placehold.it/20/304259/000000?text=+) | `#ccd6e4`  | ![#ccd6e4](https://placehold.it/20/ccd6e4/000000?text=+) |
| `coldark05`    | `#111B27`   | ![#111B27](https://placehold.it/20/111B27/000000?text=+) | `#E3E9F2`  | ![#E3E9F2](https://placehold.it/20/E3E9F2/000000?text=+) |
| `coldark08`    | `#007474`   | ![#007474](https://placehold.it/20/007474/000000?text=+) | `#5dc2c2`  | ![#5dc2c2](https://placehold.it/20/5dc2c2/000000?text=+) |
| `coldark09`    | `#7d6600`   | ![#7d6600](https://placehold.it/20/7d6600/000000?text=+) | `#cdb74a`  | ![#cdb74a](https://placehold.it/20/cdb74a/000000?text=+) |
| `coldark10`    | `#005c99`   | ![#005c99](https://placehold.it/20/005c99/000000?text=+) | `#6ab3e4`  | ![#6ab3e4](https://placehold.it/20/6ab3e4/000000?text=+) |
| `coldark11`    | `#237800`   | ![#237800](https://placehold.it/20/237800/000000?text=+) | `#82c366`  | ![#82c366](https://placehold.it/20/82c366/000000?text=+) |
| `coldark12`    | `#b800b8`   | ![#b800b8](https://placehold.it/20/b800b8/000000?text=+) | `#ea89ea`  | ![#ea89ea](https://placehold.it/20/ea89ea/000000?text=+) |
| `coldark13`    | `#8600c6`   | ![#8600c6](https://placehold.it/20/8600c6/000000?text=+) | `#cf7ef6`  | ![#cf7ef6](https://placehold.it/20/cf7ef6/000000?text=+) |
| `coldark14`    | `#aa4d00`   | ![#aa4d00](https://placehold.it/20/aa4d00/000000?text=+) | `#d88b4a`  | ![#d88b4a](https://placehold.it/20/d88b4a/000000?text=+) |
| `coldark15`    | `#bf0100`   | ![#bf0100](https://placehold.it/20/bf0100/000000?text=+) | `#f57a73`  | ![#f57a73](https://placehold.it/20/f57a73/000000?text=+) |

- **`coldark00`: Default background**  
  Also used as foreground for some elements (_e.g.: buttons_).
- **`coldark01`: Alternative background 1**  
  Used for line numbers.
- **`coldark02`: Selection background**  
  Also used as background for the line highlight.
- **`coldark03`: Comments**  
  Also used for invisible (space, tabs).
- **`coldark05`: Default foreground**  
  Also used with opacity for borders. Can also be used for punctuation.
- **`coldark08`: Cyan**  
  Used for tags and parameters. Also used for Markup code.
- **`coldark09`: Yellow**  
  Used for numeric, constants, attributes, Markup link url.
- **`coldark10`: Blue**  
  Used for classes, variables and Markup headings.
- **`coldark11`: Green**  
  Used for added elements, strings and color value (CSS).
- **`coldark12`: Magenta**  
  Used for support, regular expressions, Markup list.
- **`coldark13`: Purple**  
  Used for functions and CSS classes & IDs.
- **`coldark14`: Orange**  
  Used for keywords and storage.
- **`coldark15`: Red**  
  Used for errors, deleted elements, invalid or deprecated elements.

## Install

Go to the Prism website. Then, select the desired languages and plugins and download the JS file.

Two versions of the theme are available in the repo. Choose the variation you want and download it. Then, to use it, just include the theme's CSS file in your page and the Prism JS file.

## License

This project is open source and available under the [MIT License](https://github.com/ArmandPhilippot/coldark-prism/blob/master/LICENSE).
