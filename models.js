const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const User = sequelize.define('user', {
  username: Sequelize.TEXT,
  password: Sequelize.TEXT,
  first_name: Sequelize.TEXT,
  last_name: Sequelize.TEXT,
  address: Sequelize.TEXT,
  img: Sequelize.TEXT
});

User.beforeCreate(async (user, options) => {
  const password_digest = await bcrypt.hash(user.password, 10);
  user.password = password_digest;
});

const Event = sequelize.define('event', {
  title: Sequelize.TEXT,
  description: Sequelize.TEXT,
  start_date: Sequelize.DATE,
  end_date: Sequelize.DATE,
  address: Sequelize.TEXT,
  img: Sequelize.TEXT
});

const Comment = sequelize.define('comment',
    {
      content: Sequelize.TEXT,
      date: Sequelize.DATE,
    });

const Attendee = sequelize.define('attendee', {
  isOrganizer: Sequelize.BOOLEAN,
  rsvp: Sequelize.BOOLEAN
})

User.belongsToMany(Event, {through: Attendee})
Event.belongsToMany(User, {through: Attendee})

User.hasMany(Comment);
Comment.belongsTo(User);

Event.hasMany(Comment);
Comment.belongsTo(Event);

module.exports = {
  Comment,
  Event,
  User,
  Attendee,
  sequelize
}
