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
        address:'address',
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg'
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
        address: 'address',
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address',
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address',
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address',
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg'
      },
      {
        title: 'event title',
        description: 'description',
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'address',
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg'
      }
    ])
  } catch (e) {
    console.log('Could not create Events', e)
  }
}

async function assocUsersAndEvents(){

  const usersPromise = User.findAll();

  const eventsPromise = Event.findAll();

  const [users, events] = await Promise.all([
    usersPromise, eventsPromise
  ]);
  await Promise.all(users.map(user => user.setEvents(events)));
}

async function run(){
  try {
    await createUsers();
    await createEvents();
    await assocUsersAndEvents();
  } catch (e) {
    console.log("Could not seed data ", e);
  } finally {
    process.exit();
  }
}

run();
