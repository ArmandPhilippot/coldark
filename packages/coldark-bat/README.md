<p align="center">
  <img
    alt=""
    src="https://github.com/ArmandPhilippot/coldark/blob/main/packages/coldark-assets/banner.png"
    width="500"
  />
</p>

# Coldark - Bat

![GitHub License](https://img.shields.io/github/license/ArmandPhilippot/coldark-bat?colorA=111b27&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![GitHub package.json version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark-bat?colorA=111b27&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge)

A theme in shades of blue-grey for bat.

## Introduction

[Coldark](https://github.com/ArmandPhilippot/coldark) is a theme in shades of blue-grey, available in dark and light versions. The colors were carefully chosen to respect the Web Content Accessibility Guidelines (WCAG) and to provide sufficient reading comfort.

This Coldark version is designed for the [bat](https://github.com/sharkdp/bat) command.

## Install

1. Install `bat` (e.g., on Manjaro: `pacman -S bat`)
2. Create a new `themes` folder:
   ```sh
   mkdir -p "$(bat --config-dir)/themes"
   ```
3. Go inside this new folder:
   ```sh
   cd "$(bat --config-dir)/themes"
   ```
4. Clone the package:
   ```sh
   git clone -n --depth=1 --filter=tree:0 https://github.com/ArmandPhilippot/coldark
   cd coldark
   git sparse-checkout set --no-cone /packages/coldark-bat
   git checkout
   ```
5. Update the binary cache:
   ```sh
   bat cache --build
   ```
6. Check if the themes are correctly installed:
   ```sh
   bat --list-themes
   ```

Learn more about [adding themes in bat docs](https://github.com/sharkdp/bat#adding-new-themes).

## Activation

### One time

To select one of the Coldark themes, call `bat` with `--theme=Coldark-Cold` or `--theme=Coldark-Dark`:

```sh
bat --theme=Coldark-Cold
```

### Permanent

You can set the `BAT_THEME` environment variable to `Coldark-Cold` or `Coldark-Dark`. Then, export it in your shell's startup file to make the change permanent.

```bash
# .bashrc
export BAT_THEME="Coldark-Cold"
```

Alternatively, you can use [bat's configuration file](https://github.com/sharkdp/bat#configuration-file).

```
bat --generate-config-file
nano $(bat --config-file)
```

Then, update the theme by uncommenting the line and replacing the value:
```diff
# Specify desired highlighting theme (e.g. "TwoDark"). Run `bat --list-themes`
# for a list of all available themes
-#--theme="TwoDark"
+--theme="Coldark-Dark"
```

## Screenshots

Here are two rendering examples for each version.

### Cold

| PHP                                                                                         | Markdown                                                                                                   |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [![Coldark Cold PHP](./assets/coldark-cold-bat-php.jpg)](./assets/coldark-cold-bat-php.jpg) | [![Coldark Cold Markdown](./assets/coldark-cold-bat-markdown.jpg)](./assets/coldark-cold-bat-markdown.jpg) |

### Dark

| PHP                                                                                         | Markdown                                                                                                   |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [![Coldark Dark PHP](./assets/coldark-dark-bat-php.jpg)](./assets/coldark-dark-bat-php.jpg) | [![Coldark Dark Markdown](./assets/coldark-dark-bat-markdown.jpg)](./assets/coldark-dark-bat-markdown.jpg) |

## License

This project is licensed under the [MIT license](https://github.com/ArmandPhilippot/coldark/blob/main/LICENSE).

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
