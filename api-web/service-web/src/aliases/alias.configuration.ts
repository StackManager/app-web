import 'module-alias/register';
const moduleAlias = require('module-alias');
const _dir = __dirname + '/..';

moduleAlias.addAlias('@DB', _dir + '/database');
moduleAlias.addAlias('@Commons', _dir + '/commons');
moduleAlias.addAlias('@App', _dir + '/app.ts');
moduleAlias.addAlias('@Components', _dir + '/modules/web.components');
moduleAlias.addAlias('@WorkSpaceComponents', _dir + '/modules/work.space.components');
moduleAlias.addAlias('@WorkSpacePages', _dir + '/modules/work.space.pages');
