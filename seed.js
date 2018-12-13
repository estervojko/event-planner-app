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
        title: 'Blockchain Tech Summit',
        description: `To accelerate developments within the blockchain tech ecosystem, the Global Startup Ecosystem is to host the second annual Blockchain Tech Summit on July 23, 2019. The Blockchain Tech Summit brings together hundreds of entrepreneurs, investors, pioneers, and creatives under one roof to address humanity’s greatest challenges via blockchain technology. The summit also serves to bring key stakeholders that will accelerate both the exploration and the expansion of blockchain into mainstream audiences.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Galvanize, 303 Spring Street, New York, NY 10013`,
        img:`https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F51920041%2F272798929277%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C125%2C500%2C250&s=fe4af7fc6bfa232723e30330776ef71a`
      },
      {
        title: `Women's March on NYC`,
        description: `The Women’s March Alliance is a nonprofit whose mission is to raise women’s voices through education and activism. We will equip our communities with the tools necessary to demand change and defend our rights.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Columbus Circle, New York, NY 10023`,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53009539%2F16594408385%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C250%2C8000%2C4000&s=ff085ebd6889cab0bc37fcba6d1c97fd'
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
    //await createUsers();
    await createEvents();
    //await assocUsersAndEvents();
  } catch (e) {
    console.log("Could not seed data ", e);
  } finally {
    process.exit();
  }
}

run();
