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
    last_name: Sequelize.TEXT,
    address: Sequelize.TEXT
  });

User.beforeCreate( async(user, options) => {
    const password_digest = await bcrypt.hash(user.password, 10);
    user.password = password_digest;
  });

const Event = sequelize.define('event',
  {
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
    start_date: Sequelize.DATE,
    end_date: Sequelize.DATE,
    address: Sequelize.TEXT
  });

const Attendee = sequelize.define('attendee', {
  isOrganizer: Sequelize.BOOLEAN
})

User.belongsToMany(Event, { through: Attendee })
Event.belongsToMany(User, { through: Attendee })

module.exports = {
  Event,
  User,
  Attendee,
  sequelize
}
