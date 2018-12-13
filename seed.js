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
        title: 'Kwanza Crawl 2018',
        description: `A one day event where people of the African diaspora join together to support the Black-owned bars in their neighborhood. Crawlers will be dressed in whatever makes them feel Black and beautiful, for a day of unity, fellowship, and fun!`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'C.S. 154 Harriet Tubman Learning Center, NY 11249',
        img:`https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52998440%2F281834492555%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=3beb444c0364c39ab86718bdb7c11737`
      },
      {
        title: `New Year's Eve Party`,
        description: `Join us at Pier A for one of the biggest and best NYE parties in NYC. Just for one night, we transform our second and third floor private spaces into one giant party with DJ's, dancers, lightshows and some unexpected entertainment. Enjoy a five hour premium open bar with celebratory cocktails created by our house mixologists, champagne, hors d'oeuvres, party favors and our famous NYE late night pizza and dessert bar. And don't forget about the beautiful fireworks display that rises up over the Statue of Liberty at the stroke of midnight!`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: 'Pier A Harbor House, 22 Battery PL, New York, NY 10024',
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53403427%2F192906662921%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C5%2C1650%2C825&s=701bc71b41852ef1822ea6c0f077bafe'
      },
      {
        title: `Take Me Out - 2000s Disco Punk Party`,
        description: `Nick Marc & Guests play music by: Franz Ferdinand, The Strokes, Phoenix, The Killers, Interpol, Arctic Monkeys, Bloc Party, LCD Soundsystem, The Rakes, The Gossip, Hercules & Love Affair, Kaiser Chiefs, Yeah Yeah Yeahs, The Rapture, Hot Chip, Miike Snow, Cut Copy, Empire Of The Sun, Passion Pit, CSS, MIA & Much More`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Knitting Factory Brooklyn, 361 Metropolitan Avenue, Brooklyn, NY 11211`,
        img:`https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52711269%2F5617198057%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C2200%2C1100&s=69a53077ec458489d9bd37cb21488ef4`
      },
      {
        title: `Outsell DataMoney Conference`,
        description: `Join us at this year's Outsell DataMoney for innovative, practical and scalable solutions for contemporary data businesses where we take a deep dive into this year's theme, Client Value = Data Value. Data is available at enormous scale, driven by billions of interconnected interactions between people, businesses, and devices/things. In the face of such diversity, how does an organization move up the information value curve to create client value, unique differentiation and command higher margin to grow the business? The 2019 Outsell DataMoney conference reveals new opportunities in data monetization and commercialization. Leaders must make smart moves to navigate the shifting market conditions where today data/content is increasingly coalesced with technology and being infused into workflow to drive better decision making. To some extent, everyone is in the data business and equally in the technology business…. meaning unchartered waters for many companies today. The Outsell DataMoney conference is especially designed for the individuals’ responsible for “getting it done” executing and monetizing data and product management. Our event is designed for CPOs and in some organizations the CDO/CTO or CSO depending on role responsibilities within your organization.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `Conrad New York, 102 North End Avenue, New York, NY 10282`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F51722565%2F243722856592%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=6bd46339165d6cc8319d34406b7e6562`
      },
      {
        title: `Comedy Show Stand Up!`,
        description: `Comedy Evening is a completely free comedy show in the heart of the West Village featuring comedians who have appeared on Comedy Central, TruTV, Late Night with Stephen Colbert, and more! The show takes place in the downstairs/basement lounge of the venue. Please note that you must be 21+ to attend as the venue is a bar. While there is no cover or item minimum for the show, it is recommended that you get a drink (soda, beer, wine, etc.) or food item to support the bar and help keep the show free. Seating for the show begins at 7pm with the show starting at 7:30pm. Seating at the venue is limited and it is recommended that you get there before the show starts.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `O.P.P.A., 162 W. 4th St`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F51324012%2F261925256675%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C245%2C982%2C491&s=3071586f06435014b595b52fedf57d10`
      },
      {
        title: `Prohibition Disco: New Year's Eve`,
        description: `Quench your thirst for illicit entertainment at this very special New Year's Eve edition of Prohibition Disco. Get gussied up in glamour, gamble the night away with wise guys and wild women. Move to the grooves of our speakeasy selectors, alongside Gangsters and Goons, Daddies and Dolls, Bootleggers and Broads. Advanced tickets for Prohibition Disco are sold out! Limited tickets will be available at the door.`,
        start_date: moment().format(),
        end_date: moment().add(2, 'hours').format(),
        address: `House of Yes, 2 Wyckoff Avenue, Brooklyn, NY 11237`,
        img: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53642049%2F155520257281%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C1350%2C675&s=456009a518df7b1e4d03a3254904daa9`
      },
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
