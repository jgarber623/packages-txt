# packages-txt

**Export installed Atom packages to a TXT file.**

[![APM](https://img.shields.io/apm/v/packages-txt.svg?style=for-the-badge)](https://atom.io/packages/packages-txt)
[![Downloads](https://img.shields.io/apm/dm/packages-txt.svg?style=for-the-badge)](https://atom.io/packages/packages-txt)
[![Dependencies](https://img.shields.io/depfu/jgarber623/packages-txt.svg?style=for-the-badge)](https://depfu.com/github/jgarber623/packages-txt)

## Installation

Once you've installed [Atom](https://atom.io) and [apm](https://github.com/atom/apm), install packages-txt by running the following command:

```sh
apm install packages-txt
```

You may also install packages-txt using Atom's GUI:

1. Launch Atom.
2. Open the Preferences pane using `Cmd + ,` on macOS or `Ctrl + ,` on other platforms.
3. Select "Install" from the left column.
4. Enter "packages-txt" in the search box.
5. Click the "Install" button next to the appropriate search result.

## Usage

At any time, you can export a list of installed packages by selecting "Export Installed Packages" in packages-txt's menu item (nestled underneath Atom's "Packages" menu item). This action is also available in Atom's command palette.

By default, packages-txt will export a file named `packages.txt` to the `.atom` folder (which itself is typically in your user's home directory). You can override this behavior by adjusting the `Exported File Path` option in packages-txt's settings:

1. Launch Atom.
2. Open the Preferences pane using `Cmd + ,` on macOS or `Ctrl + ,` on other platforms.
3. Select "Packages" from the left column.
4. Click "Settings" within the packages-txt entry.
5. Enter a valid absolute file path in the "Exported File Path" text field.

### Using `packages.txt`

After exporting installed packages to a file (e.g. `~/.atom/packages.txt`), you may bulk install Atom packages by running the following command:

```sh
apm install --packages-file ~/.atom/packages.txt
```

This command is most helpful when configuring Atom on a new computer.

## License

packages-txt is freely available under the [MIT License](https://opensource.org/licenses/MIT). Use it, learn from it, fork it, improve it, change it, tailor it to your needs.
