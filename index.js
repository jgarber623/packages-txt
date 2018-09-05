'use babel';

import { CompositeDisposable } from 'atom';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { EOL } from 'os';
import path from 'path';

export default {
  config: {
    exportedFilePath: {
      description: 'Must be an absolute file path (e.g. `/home/jason/packages.txt`).',
      type: 'string',
      default: path.join(atom.configDirPath, 'packages.txt')
    }
  },

  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'packages-txt:export-installed-packages': () => this.exportInstalledPackages()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  exportInstalledPackages() {
    const exportedFilePath = atom.config.get('packages-txt.exportedFilePath');
    const installedPackages = atom.packages.getAvailablePackageNames().filter(packageName => !atom.packages.isBundledPackage(packageName));

    // Recursively create output folder structure...
    mkdirp.sync(path.dirname(exportedFilePath));

    // Write packages file...
    fs.writeFileSync(exportedFilePath, `${installedPackages.join(EOL)}${EOL}`);
  }
};
