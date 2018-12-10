const { Sequelize } = require('sequelize');

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
    password_digest: Sequelize.TEXT,
    first_name: Sequelize.TEXT,
    last_name: Sequelize.TEXT
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
