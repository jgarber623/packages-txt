'use babel';

import mkdirp from 'mkdirp';
import path from 'path';

import { CompositeDisposable } from 'atom';
import { writeFileSync } from 'fs';
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

    mkdirp.sync(path.dirname(exportedFilePath));

    writeFileSync(exportedFilePath, `${userPackages.join(EOL)}${EOL}`);
  }
};
