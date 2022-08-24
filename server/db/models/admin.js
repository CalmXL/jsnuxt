const seq = require('../mysql_connect'),
      { STRING } = require('../../configs/db_config');

const Admin = seq.define('admin', {
  username: {
    comment: 'admin user name',
    type: STRING,
    allowNull: false
  },
  password: {
    comment: 'admin password',
    type: STRING,
    allowNull: false
  }
});

module.exports = Admin;