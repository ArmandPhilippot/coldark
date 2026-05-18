# coldark-firefox

## 2.0.0

### Major Changes

- 555f654: Reorganizes the shared Coldark denominations to ease maintenance and variant porting.
  - `coldark00` to `coldark07` now form a stable neutral ramp ordered from the lightest common shade to the darkest.
  - `coldark08` to `coldark15` now form stable accent slots ordered by hue from red to magenta.

  The documentation have been updated to preserve the rendered colors while making the palette easier to understand, maintain, and port to other tools.

- 4f79a4a: Moves and renames the package from `coldark` to `coldark-firefox`

  No major changes regarding the theme but the package itself has been renamed and its repository has moved. All Coldark packages are now available at https://github.com/ArmandPhilippot/coldark

### Patch Changes

- d23afa6: Fixes broken images in the README.

## [1.0.3](https://github.com/ArmandPhilippot/coldark/compare/coldark-firefox@1.0.2...coldark-firefox@1.0.3)

### Commits

- build: fix environment variables and scripts
- fix: add extension id

## [1.0.2](https://github.com/ArmandPhilippot/coldark/compare/coldark-firefox@1.0.1...coldark-firefox@1.0.2) - 2020-11-10

### Commits

- Add xpi file to install theme
- fix: frame inactive background color (too dark before)
- build: remove previous version

## [1.0.1](https://github.com/ArmandPhilippot/coldark/compare/coldark-firefox@1.0.0...coldark-firefox@1.0.1) - 2020-11-09

### Commits

- docs: fix Banner path

## 1.0.0 - 2020-11-09

### Commits

- build: web-ext, dot-env + add scripts lint, build, sign
- Initial release
- feat: Add cold & dark versions, icon/shortcut to switch theme
- docs: color usage, screenshots, install, features
