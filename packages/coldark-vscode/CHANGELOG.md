# coldark-vscode

## 2.0.0

### Major Changes

- 3aae768: Moves and renames the package from `coldark` to `coldark-vscode`

  No major changes regarding the theme but the package itself has been renamed and its repository has moved. All Coldark packages are now available at https://github.com/ArmandPhilippot/coldark

### Patch Changes

- d23afa6: Fixes broken images in the README.

## [1.2.11](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.10...coldark-vscode@1.2.11) (2022-05-14)

### Changes

- add bracket highlight colors
- complete settings & diffEditor colors
- remove/replace deprecated settings
- update terminal find match colors

### Docs

- replace website used for colors preview
- update unused settings

## [1.2.10](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.9...coldark-vscode@1.2.10) (2021-10-30)

### Bug Fixes

- **css:** add a scope to color all property names

### Changes

- complete Gitlens settings to set Coldark colors as default
- complete various settings without real visual impact
- complete VS Code settings colors
- remove deprecated settings
- set keybinding colors

### Docs

- complete unused settings list

## [1.2.9](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.8...coldark-vscode@1.2.9)

### Commits

- chore: add new settings and remove renameOnType
- docs: remove 1 setting and add some new unused settings
- build: change auto-changelog settings

## [1.2.8](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.7...coldark-vscode@1.2.8)

### Added

- Add 3 settings: `editor.foldBackground` + 2 gitDecoration

### Fixed

- chore: change red for both versions + change terminal colors

### Commits

- docs: remove 3 settings (foldBackground, 2 gitDecoration)

## [1.2.7](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.6...coldark-vscode@1.2.7) - 2020-11-10

### Added

- New settings: last pin border, hover/focus in settings

### Fixed

- Switch light/dark gray + change selection background

### Changed

- Tabs & selection background

### Commits

- README: update screenshots, logo, banner and colors usage
- README: change tabs & selection background
- README: add charts and two git decoration

## [1.2.6](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.5...coldark-vscode@1.2.6) - 2020-11-03

### Security

- Add dotenv to `.vscodeignore`

## [1.2.5](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.4...coldark-vscode@1.2.5) - 2020-11-03

### Fixed

- Terminal: update white, black, grays colors for better readability

### Commits

- build: use dotenv for publishing on OpenVSX (token)

## [v1.2.4](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.3...coldark-vscode@1.2.4) - 2020-11-02

### Fixed

- UI: add 3 settings (onTypeRename, OverViewRuler, gitlens)

## [1.2.3](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.2...coldark-vscode@1.2.3) - 2020-11-01

### Changed

- Complete syntax: diff files, makefile
- Minor changes Shell & Rust

## [1.2.2](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.1...coldark-vscode@1.2.2) - 2020-10-28

### Fixed

- Syntax: Add missing Markdown syntax (present before refactoring)

## [1.2.1](https://github.com/ArmandPhilippot/coldark/compare/coldark-vscode@1.2.0...coldark-vscode@1.2.1) - 2020-10-28

### Commits

- Refactor CHANGELOG + Add some details
- build: change auto-changelog command

## 1.2.0 - 2020-10-28

### Added

- Addition for syntax: storage modifier changes from orange to magenta.
- Add new settings. Check the diff of UNUSED.md to see changes.
- Add 2 screenshots on Linux with no folder open

### Changed

- Update Coldark Colors (UI & Syntax)
- Change comments style: remove italic in editor & adjust color for better readability in terminal.
- Changes for syntax: opening/closing embedded language use cyan like tags. Red is reserved for invalids.
- Refactor colors presentation & update colors + usage

### Removed

- Remove some settings. Check the diff of UNUSED.md to see changes.

## 1.1.7 - 2020-10-18

### Changed

- Refactor Syntax: reorder settings, improve naming
- Syntax: improve colors for regex, namespace, shell, python, C/C++

### Fixed

- Fix (UI): change opacity for inactive/unfocused tabs

## 1.1.6 - 2020-10-15

### Fixed

- Fix (terminal): color readjustment to improve readability (err/warn)
- Doc: update list - `editor.onTypeRename` remove

## 1.1.5 - 2020-10-11

### Changed

- Update VSCE version & change sidebar badges
- README: add VS Code marketplace + OpenVSX links

### Fixed

- Fix onTypeRename background
- Improve CSS colors

## 1.1.4 - 2020-10-02

### Fixed

- Terminal: change black & white for better readability

## 1.1.3 - 2020-10-02

### Fixed

- Terminal: switch black/white & bright versions (bold bright issue)

## 1.1.2 - 2020-09-27

### Fixed

- README: change `coldark04` description

## 1.1.1 - 2020-09-27

### Fixed

- README: change table header (screenshots) & missing line break

## 1.1.0 - 2020-09-26

### Added

- Complete settings (UI & syntax)
- Add unused settings

### Changed

- Reorganize code (mostly alphabetical)
- Harmonize colors
- Update README, logo & screenshots
- Update package info & repo URL

## 1.0.2 - 2020-06-22

### Fixed

- Change Banner format in README (VS Code issue because of SVG)
- Fix minimum VS Code version
- Ignore VS Code packages

## 1.0.1 - 2020-06-22

### Added

- Add logo, license & category
- Add VSCode package

### Changed

- Improve README style with banner & badges

## 1.0.0 - 2020-06-22

### Commits

- Initial release
