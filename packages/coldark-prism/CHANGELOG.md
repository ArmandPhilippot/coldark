# coldark-prism

## 2.0.0

### Major Changes

- 25877bb: Moves the package to a monorepo to ease the maintenance and variants discoverability. The new home is located at https://github.com/ArmandPhilippot/coldark
- 555f654: Reorganizes the shared Coldark denominations to ease maintenance and variant porting.
  - `coldark00` to `coldark07` now form a stable neutral ramp ordered from the lightest common shade to the darkest.
  - `coldark08` to `coldark15` now form stable accent slots ordered by hue from red to magenta.

  The documentation have been updated to preserve the rendered colors while making the palette easier to understand, maintain, and port to other tools.

### Patch Changes

- d23afa6: Fixes broken images in the README.

## [1.0.5](https://github.com/ArmandPhilippot/coldark/compare/coldark-prism@1.0.4...coldark-prism@1.0.5)

With some ports, errors in the terminal were unreadable. Changing red color fix this problem.

### Commits

- fix: change red color for both versions

## [1.0.4](https://github.com/ArmandPhilippot/coldark/compare/coldark-prism@1.0.3...coldark-prism@1.0.4) - 2020-10-28

### Commits

- Update Coldark Colors / Complete Markdown syntax highlighting
- Update colors, logo & banner + refactor color details
- build: update auto-changelog command

## [1.0.3](https://github.com/ArmandPhilippot/coldark/compare/coldark-prism@1.0.2...coldark-prism@1.0.3) - 2020-10-11

### Commits

- fix: convert spaces to tabs + missing empty lines
- build: add stylelint & prettier config

## [1.0.2](https://github.com/ArmandPhilippot/coldark/compare/coldark-prism@1.0.1...coldark-prism@1.0.2) - 2020-10-11

### Commits

- fix: improve color overriding + add other plugins
- refactor: keep consistency with other Prism themes - color overrides

## [1.0.1](https://github.com/ArmandPhilippot/coldark/compare/coldark-prism@1.0.0...coldark-prism@1.0.1) - 2020-10-11

### Commits

- fix: missing tokens for CSS

## 1.0.0 - 2020-10-10

### Commits

- feat: themes for Prism.js
- Initial commit
- docs: add README
