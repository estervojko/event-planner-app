const { Event, User, Attendee } = require('./models.js');
const moment = require('moment');

async function createUsers(){
  try {
    await User.bulkCreate([
      {
        username: 'username',
        password: 12345,
        first_name: 'first_name',
        last_name: 'last_name',
        address:'address'
      },
      {
        username: 'username',
        password: 12345,
        first_name: 'first_name',
        last_name: 'last_name',
        address:'address'
      },
      {
        username: 'username',
        password: 12345,
        first_name: 'first_name',
        last_name: 'last_name',
        address:'address'
      },
      {
        username: 'username',
        password: 12345,
        first_name: 'first_name',
        last_name: 'last_name',
        address:'address'
      },
      {
        username: 'username',
        password: 12345,
        first_name: 'first_name',
        last_name: 'last_name',
        address:'address'
      }
    ])
  } catch (e) {
    console.log('Could not create Users ', e)
  }
}

async function createEvents(){
  try {
    await Event.bulkCreate([
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address'
      }
    ])
  } catch (e) {
    console.log('Could not create Events', e)
  }
}

async function run(){
  try {
    await createUsers();
    await createEvents();
  } catch (e) {
    console.log("Could not seed data ", e);
  } finally {
    process.exit();
  }
}

run();
