var keystone = require('keystone');

keystone.init({
  'name': 'KeystoneCMS',
  'static': [
    './server/public/js/',
    './server/public/img/',
  ],
  'auto update': true,
  'mongo': 'mongodb://localhost:27017/kscms',
  'auth': true,
  'user model': 'User',
  'cookie secret': '1D23FE4POIA9KD1SS2JFUGD3'
});

keystone.import('./server/models');

keystone.set('routes', require('./server/routes'));

keystone.start();