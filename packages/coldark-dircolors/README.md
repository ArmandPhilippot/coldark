<p align="center">
  <img
    alt=""
    src="https://github.com/ArmandPhilippot/coldark/raw/main/packages/coldark-assets/banner.png"
    width="400"
  />
</p>

# Coldark - Dircolors

![License](https://img.shields.io/github/license/ArmandPhilippot/coldark?colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge) ![Package version](https://img.shields.io/github/package-json/v/ArmandPhilippot/coldark?filename=packages%2Fcoldark-dircolors%2Fpackage.json&colorA=213043&color=d0dae7&logo=Github&logoColor=e3eaf2&style=for-the-badge)

A theme in shades of blue-grey adapted for dircolors.

## Introduction

[Coldark](https://github.com/ArmandPhilippot/coldark/) is a theme in shades of blue-grey, available in dark and light versions. Its colors have been carefully chosen to offer sufficient reading comfort in most situations.

This variant is designed for dircolors in conjunction with the [Coldark variant for the XFCE terminal](https://github.com/ArmandPhilippot/coldark/tree/main/packages/coldark-xfce4-terminal).

## Use of colors

- **`coldark00`: Black**  
  Used as foreground for sticky other writable directories.
- **`coldark00`: Dark gray**  
  Used as foreground for ignored files (e.g., `.log`, `.bak`).
- **`coldark05`: White**  
  Used as foreground for missing files, files with setuid or setgid permissions, files with capability, sticky not other writable directories.
- **`coldark08`: Cyan**  
  Used as foreground for symbolic links, regular files with more than one link, pipes and audio files.
- **`coldark09`: Yellow**  
  Used as foreground for socket files, block devices drivers and character device drivers and video files.
- **`coldark10`: Blue**  
  Used as foreground for directories and as background for sticky not other writable directories.
- **`coldark11`: Green**  
  Used as foreground for other writable directories, archives and various documents. Also used as background for sticky other writable directories.
- **`coldark12`: Magenta**  
  Used as foreground for doors and images.
- **`coldark15`: Red**  
  Used as foreground for orphaned symbolic links and executable. Also used as background for missing files.

## Screenshots

Coldark dircolors is compatible with all applications that respect the `LS_COLORS` environment variable. The following screenshots use the `ls`, `exa`, and `tree` commands.

| Light Theme | Dark Theme |
| :---------: | :--------: |
| ![Screenshot of the ls command output with Coldark Cold](./assets/coldark-light-ls.jpg) | ![Screenshot of the ls command output with Coldark Dark](./assets/coldark-dark-ls.jpg) |
| ![Screenshot of the ls command output showing symlinks with Coldark Cold](./assets/coldark-light-symlinks.jpg) | ![Screenshot of the ls command output showing symlinks with Coldark Dark](./assets/coldark-dark-symlinks.jpg) |
| ![Screenshot of the exa command output with Coldark Cold](./assets/coldark-light-exa.jpg) | ![Screenshot of the exa command output with Coldark Dark](./assets/coldark-dark-exa.jpg) |
| ![Screenshot of the tree command output with Coldark Cold](./assets/coldark-light-tree.jpg) | ![Screenshot of the tree command output with Coldark Dark](./assets/coldark-dark-tree.jpg) |

## How to install

Download the `dir_colors` file and place it in your home directory (ie. `~/.dir_colors`).

## Activation

To activate and use Coldark dircolors as your default color theme for all sessions, you need to edit the configuration file of your shell (`~/.bashrc`, `~/.zshrc`, ... ). Insert the following snippet in your shell config:

```
# Load Coldark dircolors.
eval "$(dircolors ~/.dir_colors)"
```

## For OhMyZsh users

If you are using [OhMyZsh](https://ohmyz.sh/) on GNU/Linux, you should place the following code in `~/.zshrc`, right after the `eval`, so that the tab completion uses the same colors:

```
# Zsh Completion with LS Colors
zstyle ':completion:*:default' list-colors "$LS_COLORS"
```

Thanks to [rarylson](https://github.com/ohmyzsh/ohmyzsh/issues/6060#issuecomment-572863893) for the trick.

## License

This project is open source and available under the [MIT License](https://github.com/ArmandPhilippot/coldark/blob/main/LICENSE).
