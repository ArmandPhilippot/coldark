<p align="center">
    <img src="assets/coldark-banner.png" alt="Coldark Banner" width="400" />
</p>

# Coldark - Dircolors

![GitHub License](https://img.shields.io/github/license/ArmandPhilippot/coldark-dircolors?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![GitHub package.json version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark-dircolors?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge)

An optimized theme for web development that comes with two versions: light & dark.

## Presentation

[Coldark](https://github.com/ArmandPhilippot/coldark/) is a gray-blue theme. The colors used respect the Web Content Accessibility Guidelines (WCAG) in order to provide sufficient reading comfort.

Coldark dircolors can be installed for all application that respect the `LS_COLORS` environment variable. You can thus use it with commands like `ls`, `tree` ...

It is recommended to use it with [Coldark for XFCE4 terminal](https://github.com/ArmandPhilippot/coldark-xfce4-terminal) so that the colors match those of Coldark.

## Colors

Coldark consists of three color palettes. The first is common to both versions. The other two each apply to a version. Coldark uses 16 colors for each theme.

Coldark dircolors reuses the colors of the terminal: black, white, red, magenta, green, blue, yellow & cyan. If you are using Coldark for XFCE4 terminal, it will only use 8 colors since the normal and bright versions of the colors are the same.

|  | Light Theme |  | Dark Theme |  |
| --- | --- | :-: | :-: | :-: |
| **Usage code** | **Hex** | **Preview** | **Hex** | **Preview** |
| `coldark00` | `#E3E9F2` | ![#E3E9F2](https://placehold.it/20/E3E9F2/000000?text=+) | `#111B27` | ![#111B27](https://placehold.it/20/111B27/000000?text=+) |
| `coldark05` | `#111B27` | ![#111B27](https://placehold.it/20/111B27/000000?text=+) | `#E3E9F2` | ![#E3E9F2](https://placehold.it/20/E3E9F2/000000?text=+) |
| `coldark08` | `#007474` | ![#007474](https://placehold.it/20/007474/000000?text=+) | `#5dc2c2` | ![#5dc2c2](https://placehold.it/20/5dc2c2/000000?text=+) |
| `coldark09` | `#7d6600` | ![#7d6600](https://placehold.it/20/7d6600/000000?text=+) | `#cdb74a` | ![#cdb74a](https://placehold.it/20/cdb74a/000000?text=+) |
| `coldark10` | `#005c99` | ![#005c99](https://placehold.it/20/005c99/000000?text=+) | `#6ab3e4` | ![#6ab3e4](https://placehold.it/20/6ab3e4/000000?text=+) |
| `coldark11` | `#237800` | ![#237800](https://placehold.it/20/237800/000000?text=+) | `#82c366` | ![#82c366](https://placehold.it/20/82c366/000000?text=+) |
| `coldark12` | `#b800b8` | ![#b800b8](https://placehold.it/20/b800b8/000000?text=+) | `#ea89ea` | ![#ea89ea](https://placehold.it/20/ea89ea/000000?text=+) |
| `coldark15` | `#bf0100` | ![#bf0100](https://placehold.it/20/bf0100/000000?text=+) | `#f57a73` | ![#f57a73](https://placehold.it/20/f57a73/000000?text=+) |

- **`coldark00`: Black**  
  Used as foreground for sticky other writable directories.
- **`coldark05`: White**  
  Used as foreground for missing files, files with setuid or setgid permissions, files with capability, sticky not other writable directories and ignored files (like `.log`, `.bak` ...).
- **`coldark08`: Cyan**  
  Used as foreground for symbolic links, regular files with more than one link, pipes and audio files.
- **`coldark09`: Yellow**  
  Used as foreground for socket files, block devices drivers and character device drivers and video files.
- **`coldark10`: Blue**  
  Used as foreground for directories and as background for sticky not other writable directories.
- **`coldark11`: Green**  
  Used as foreground for other writable directories, archives and various documents. Also used as background for sticky other writable directories.
- **`coldark12`: Magenta**  
  Used as foreground for doors and images..
- **`coldark15`: Red**  
  Used as foreground for orphaned symbolic links and executable. Also used as background for missing files.

## Screenshots

Some examples with `ls`, symbolic links (and missing file), `exa` and `tree`.

| Light Theme | Dark Theme |
| :-: | :-: |
| ![Coldark LS](./assets/coldark-light-ls.jpg) | ![Coldark LS](./assets/coldark-dark-ls.jpg) |
| ![Coldark Symlinks](./assets/coldark-light-symlinks.jpg) | ![Coldark Symlinks](./assets/coldark-dark-symlinks.jpg) |
| ![Coldark exa](./assets/coldark-light-exa.jpg) | ![Coldark exa](./assets/coldark-dark-exa.jpg) |
| ![Coldark tree](./assets/coldark-light-tree.jpg) | ![Coldark tree](./assets/coldark-dark-tree.jpg) |

## Install

Download the [](https://github.com/ArmandPhilippot/coldark-dircolors/blob/master/dir_colors) file, rename it as `.dir_colors` and place it in your home directory (so `~/.dir_colors`).

## Activation

To activate and use Coldark dircolors as your default color theme for all sessions, you need to edit the configuration file of your shell (`~/.bashrc`, `~/.zshrc`, ... ). Once opened, add the following snippet:

```
# Load Coldark dircolors.
eval "$(dircolors ~/.dir_colors)"
```

## For OhMyZsh users

If you are using OhMyZsh on GNU/Linux, you should place the following code in `~/.zshrc`, right after the `eval`, so that the tab completion uses the same colors:

```
# Zsh Completion with LS Colors
zstyle ':completion:*:default' list-colors "$LS_COLORS"
```

Thanks to [rarylson](https://github.com/ohmyzsh/ohmyzsh/issues/6060#issuecomment-572863893) for the trick.

## License

This project is open source and available under the [MIT License](https://github.com/ArmandPhilippot/coldark-dircolors/blob/master/LICENSE).
