const { sequelize, Event, User } = require('./models.js');


//creates some articles
const seed = async() => {
  try{
    const events = Event.bulkCreate([
      {
        name: 'Prrr',
      },
      {
        name: 'event in new york',
      },
      {
        name: 'event in los angeles',
      },
      {
        name: 'event miami',
      }
    ])
  }
  catch(e){
    console.log(e);
  }
}


//console logs all articles
const fetchPlaces = async() => {
  try {
    const events = await Event.findAll();
    console.log(JSON.stringify(events, null, 2));
  }
  catch(e){
    console.log(e);
  }
}

const run = async() => {
  await seed();
  await fetchPlaces();
  process.exit();
}

run();
