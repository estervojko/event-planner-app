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
      console.log("Axios - Event req - failed to GET ALL events ", e.message);
    }
  },

  getEvent: async function (id){
    try {
      const resp = await axios.get(BASE_URL + EVENTS + id);
      const event = resp.data.event;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to GET ONE event ", e.message);
    }
  },

  postEvent: async function (data){
    try {
      const resp = await axios.post(BASE_URL + EVENTS, data);
      const event = resp.data.event;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to POST event ", e.message);
    }
  },

  deleteEvent: async function (id) {
    try {
      const resp = await axios.delete(BASE_URL + EVENTS + id);
      const event = resp.data.event;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to POST event ", e.message);
    }
  },

  putEvent: async function (id, data) {
    try {
      const resp = await axios.put(BASE_URL + EVENTS + id, data);
      const event = resp.data.updatedEvent;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to PUT event ", e.message);
    }
  }
}


async function test(){
  const data = {
    title: "Update Event from Axios",
    description: "Description...",
    start_date: moment().format(),
    end_date: moment().add(3, 'hours').format(),
    address: "address"
  }
  try {
    const resp = await eventReq.putEvent(4, data);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}

test();

module.exports = {
  eventReq
}
