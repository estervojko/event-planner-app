const axios = require('axios');
const moment = require('moment');

const BASE_URL = 'http://localhost:3000/';
const EVENTS = 'events/';

const eventReq = {
  getEvents: async function (){
    try {
      const resp = await axios.get(BASE_URL + EVENTS);
      const events = resp.data.events;
      return events;
    } catch (e) {
      console.log("Axios - Event req - failed to GET ALL events");
    }
  },
  getEvent: async function (id){
    try {
      const resp = await axios.get(BASE_URL + EVENTS + id);
      const event = resp.data.event;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to GET ONE event");
    }
  },
  postEvent: async function (data){
    try {
      const resp = await axios.post(BASE_URL + EVENTS, data);
      const event = resp.data.event;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to POST event");
    }
  }
}


async function test(){
  const data = {
    title: "Test Event from Axios",
    description: "Description...",
    start_date: moment().format(),
    end_date: moment().add(2, 'hours').format(),
    address: "address"
  }
  try {
    const resp = await eventReq.postEvent(data);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}

test();

module.exports = {
  eventReq
}
