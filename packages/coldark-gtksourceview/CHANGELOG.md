# coldark-gtksourceview

## 2.0.0

### Major Changes

- 25877bb: Moves the package to a monorepo to ease the maintenance and variants discoverability. The new home is located at https://github.com/ArmandPhilippot/coldark
- db5c725: Replaces LGPL license with MIT license.
- 555f654: Reorganizes the shared Coldark denominations to ease maintenance and variant porting.
  - `coldark00` to `coldark07` now form a stable neutral ramp ordered from the lightest common shade to the darkest.
  - `coldark08` to `coldark15` now form stable accent slots ordered by hue from red to magenta.

  The documentation have been updated to preserve the rendered colors while making the palette easier to understand, maintain, and port to other tools.

### Patch Changes

- d23afa6: Fixes broken images in the README.

## [1.0.3](https://github.com/ArmandPhilippot/coldark/compare/coldark-gtksourceview@1.0.2...coldark-gtksourceview@1.0.3)

With some ports, errors in the terminal were unreadable. Changing red color fix this problem.

### Commits

- fix: change red color for both versions

## [1.0.2](https://github.com/ArmandPhilippot/coldark/compare/coldark-gtksourceview@1.0.1...coldark-gtksourceview@1.0.2) - 2020-11-02

### Commits

- fix: License not recognize by Github
- fix: license value

## [1.0.1](https://github.com/ArmandPhilippot/coldark/compare/coldark-gtksourceview@1.0.0...coldark-gtksourceview@1.0.1) - 2020-11-02

### Commits

- fix: License since is part of GtkSourceView

## 1.0.0 - 2020-11-01

### Commits

- Initial commit
