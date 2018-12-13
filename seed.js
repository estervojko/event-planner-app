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
<<<<<<< Updated upstream
        address: 'address',
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg'
      }
=======
        address: `House of Yes, 2 Wyckoff Avenue, Brooklyn, NY 11237`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53642049%2F155520257281%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C1350%2C675&s=456009a518df7b1e4d03a3254904daa9`
      },
      {
        title: `Black Excellence Ball 2018`,
        description: `The Illustrious Black Excellence Ball returns for another year of Greatness. This is one of the best events you will experience in NYC. From tailored suits to Ball room dresses, it’s amazing. This year’s theme is Harlem Renaissanc. Get ready.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Capitale Ballroom, New York City, NYC 11202`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F51140162%2F246527055534%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C1500%2C750&s=c701d922e9fb9dfae4bea5a98775ff9b`
      },
      {
        title: `Inman Connect New York 2019 - Real Estate Conference`,
        description: `Inman Connect is a week-long event bringing together more than 4,000 of real estate’s most successful and innovative professionals. CEOs of leading franchises and indie brokerages, top-producing agents and brokers, MLS and association leaders, tech entrepreneurs and marketing execs, all come together at Inman Connect to network, make deals, explore current trends, discover new technology and embrace the change that surrounds our industry.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `New York Marriott Marquis, 1535 Broadway, New York, NY 10036`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F51850118%2F227202110257%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=9bcb3dc8ebcca9e47fbe16e4e887d76f`
      },
      {
        title: `Ugly Sweater Party in Williamsburg`,
        description: `Our 7th Annual Ugly Sweater Party is almost here! We're partying all night long in our ugliest of threads with proceeds from this event going towards the purchase toys for the pediatric patients at The Brooklyn Hospital Center.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `307 Kent Avenue, Brooklyn, NY 11249`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53272315%2F88690176627%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=0991f3bcf3c67b5bae65fd92870b111b`
      },
      {
        title: `2018 Candlelight Carol Festival`,
        description: `This longstanding Candlelight Carol Festival at The Riverside Church has become an essential part of Christmas in New York City. This service of music and light combines carillon, organ, harp, and all of the choirs of The Riverside Church and culminates in a ritual sharing of candlelight illuminating the Nave. Musical prelude begins at 3:00 pm.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `The Riverside Church, 490 Riverside Drive, New York, NY 10027`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F51161497%2F230520030249%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C800%2C400&s=6a142aceeb133434b7f79adc3d1cfc7f`
      },
      {
        title: `GLORY: An Original Christmas Production`,
        description: `Join us for an original Christmas production presented by C3 NYC! With original music by Anthony Ramos (star from Hamilton and recent film, A Star Is Born) and Will Wells and book by Jonathan Green, you'll experience the Christmas story in a whole new way. You'll also hear from guest speaker Pastor Phil Pringle (founder of the C3 Movement) who will be sharing an encouraging Christmas message, we'll have live worship and a lot more fun surprises planned for you!`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `The New School, 63 5th Avenue, New York, NY 10003`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53801970%2F180702416044%2F1%2Foriginal.20181211-035038?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=530ac2f731e4fc9a7ae7cb5337eaebe9`
      },
      {
        title: `AdHoc Holidy Party!`,
        description: `*Open Bar 8-10pm* DJs - featuring DJ sets from YUM CHA, Nick Hakim and FUTURE PUNX`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Baby's All Right, 146 Broadway, Brooklyn, NY 11211`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53403511%2F264505379991%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C304%2C2550%2C1275&s=783441ce71e317d562d8207b5ebe1841`
      },
      {
        title: `Winter On The Bay Dec 14-16th`,
        description: `One of the most exciting of it's kind, Winter On The Bay is the premiere event for food, drinks, and fun! Brought to you by Festivals on The Bay and various Sponsors, #WOTB2018 is the Ultimate Holiday Experience- already attracting hundreds of people from Long Island & New York Tri-State areas to the beautiful shores of Tanner Park Beach in the Town Of Babylon, NY. Truly a celebration of community spirit, this weekend event offers something for everyone!`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Tanner Park Beach, 400 Baylawn Avenue, Copiague, NY 11726`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52422703%2F269528531629%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C120%2C1920%2C960&s=10fa14be9cb4a5c5f4190fd7f5d26192`
      },
      {
        title: `Brunch With Santa at Aviator Sports`,
        description: `Enjoy a full brunch buffet, an opportunity to photo with the big man himself, Santa Claus. Included in your ticket will be one free photo per child and cupcake decorating to make your own bite-sized treats. We’ll also have arts and crafts like decorating your own personal Santa hat and holiday ornament. We’ll be revamping our Brunch with Santa to be bigger than ever this year. We’ll be updating our brunch menu to give even more options to your general brunch menu than eggs, pancakes, and muffins. Our new menu items will include by not limited to the Southern delicacy, buscuits with sausage and gravy. Another entree we’ll be adding is a Christmas staple, a carved ham alongside our new oatmeal bar`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Aviatorr Sports and Events Center, 3159 Flatbush Ave., Brooklyn, New York 11234`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F51264275%2F55703432533%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C86%2C1916%2C958&s=e750a2312d3ee6f276792813f7f63e0a`
      },
>>>>>>> Stashed changes
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
