var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function(done) {
  new User.model({
    name: {
      first: 'admin',
      last: 'user'
    },
    email: 'mutuyueniao@163.com',
    password: 'admin',
    canAccessKeystone: true
  }).save(done);
};