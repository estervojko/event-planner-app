const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize({
  database: 'events_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const User = sequelize.define('user',
  {
    username: Sequelize.TEXT,
    password: Sequelize.TEXT,
    first_name: Sequelize.TEXT,
    last_name: Sequelize.TEXT
  });

User.beforeCreate( async(user, options) => {
    const password_digest = await bcrypt.hash(user.password, 10);
    user.password = password_digest;
  });

const Event = sequelize.define('event',
  {
    name: Sequelize.TEXT
  });

module.exports = {
  Event,
  User,
  sequelize
}
