const {install} = require('../../../esinstall/lib');
const path = require('path');

describe('package-entrypoints general tests', () => {
  it('Supports packages with a dot in the name', async () => {
    const cwd = __dirname;
    const dest = path.join(cwd, 'test-dot-in-name');
    const spec = 'pkg-with-dot.in-the-name';

    const {
      importMap: {imports},
    } = await install([spec], {
      cwd,
      dest,
    });

    expect(imports[spec]).toBeTruthy();
  });

  it.skip('Prefers the module field to main', async () => {
    const cwd = __dirname;
    const dest = path.join(cwd, 'test-module');
    const spec = 'module';

    const {
      importMap: {imports},
    } = await install([spec], {
      cwd,
      dest,
    });

    expect(imports[spec]).toBeTruthy();
  });

  it.skip('Prefers the jsnext:main field to main', async () => {
    const cwd = __dirname;
    const dest = path.join(cwd, 'test-jsnext-main');
    const spec = 'jsnext-main';

    const {
      importMap: {imports},
    } = await install([spec], {
      cwd,
      dest,
    });

    expect(imports[spec]).toBeTruthy();
  });
});
