'use babel';

import path from 'path';

import { CompositeDisposable } from 'atom';
import { mkdirSync, writeFileSync } from 'fs';
import { EOL } from 'os';

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
      'packages-txt:export-installed-packages': () => this.exportUserPackages()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  exportUserPackages() {
    const exportedFilePath = atom.config.get('packages-txt.exportedFilePath');
    const userPackages = atom.packages.getAvailablePackages().filter(pkg => !pkg.isBundled).map(pkg => pkg.name);

    mkdirSync(path.dirname(exportedFilePath), { recursive: true });

    writeFileSync(exportedFilePath, `${userPackages.join(EOL)}${EOL}`);
  }
};
