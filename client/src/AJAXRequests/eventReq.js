const axios = require('axios');

const BASE_URL = 'http://localhost:3000/';
const EVENTS = 'events';

const eventReq = {
  getEvents: async function (){
    try {
      const resp = await axios.get(BASE_URL + EVENTS)
      const events = resp.data.events
      return events
    } catch (e) {
      console.log("Axios - Event req - failed to GET ALL events");
    }
  }
}


async function test(){
  try {
    const resp = await eventReq.getEvents();
    console.log(resp);
  } catch (e) {
    console.log(e);
  } finally {

  }
}

test();

module.exports = {
  eventReq
}
