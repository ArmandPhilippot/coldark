# coldark-bat

## 2.0.0

### Major Changes

- 25877bb: Moves the package to a monorepo to ease the maintenance and variants discoverability. The new home is located at https://github.com/ArmandPhilippot/coldark
- 555f654: Reorganizes the shared Coldark denominations to ease maintenance and variant porting.
  - `coldark00` to `coldark07` now form a stable neutral ramp ordered from the lightest common shade to the darkest.
  - `coldark08` to `coldark15` now form stable accent slots ordered by hue from red to magenta.

  The documentation have been updated to preserve the rendered colors while making the palette easier to understand, maintain, and port to other tools.

### Patch Changes

- d23afa6: Fixes broken images in the README.

## [1.0.5](https://github.com/ArmandPhilippot/coldark/compare/coldark-bat@1.0.4...coldark-bat@1.0.5)

With some ports, errors in the terminal were unreadable. Changing red color fix this problem.

### Commits

- fix: change red color for both versions

## [1.0.4](https://github.com/ArmandPhilippot/coldark/compare/coldark-bat@1.0.3...coldark-bat@1.0.4) - 2020-10-28

### Commits

- Update Coldark Colors / Complete Markdown syntax highlighting
- Update colors, logo, banner & add some screenshots
- build: update auto-changelog command

## [1.0.3](https://github.com/ArmandPhilippot/coldark/compare/coldark-bat@1.0.2...coldark-bat@1.0.3) - 2020-10-19

### Commits

- fix: color for pseudo-class/element in CSS

## [1.0.2](https://github.com/ArmandPhilippot/coldark/compare/coldark-bat@1.0.1...coldark-bat@1.0.2) - 2020-10-18

### Commits

- fix: update scopes to be up to date with VS Code theme

## [1.0.1](https://github.com/ArmandPhilippot/coldark/compare/coldark-bat@1.0.0...coldark-bat@1.0.1) - 2020-10-17

### Commits

- docs: fix export command

## 1.0.0 - 2020-10-17

### Commits

- feat: Coldark for bat command
- Initial commit
- docs: add README
