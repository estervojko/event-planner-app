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

  postEvent: async function (data, TOKEN){
    try {
      const resp = await axios({
        method: 'post',
        url: BASE_URL + EVENTS,
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        },
        data: data
      });
      const event = resp.data.event;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to POST event ", e.message);
    }
  },

  deleteEvent: async function (id, TOKEN) {
    try {
      const resp = await axios({
        method: 'delete',
        url: BASE_URL + EVENTS + id,
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        },
      });
      const event = resp.data.event;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to POST event ", e.message);
    }
  },

  putEvent: async function (id, data, TOKEN) {
    try {
      const resp = await axios({
        method: 'put',
        url: BASE_URL + EVENTS + id,
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        },
        data: data
      });
      const event = resp.data.updatedEvent;
      return event;
    } catch (e) {
      console.log("Axios - Event req - failed to PUT event ", e.message);
    }
  }
}

export {
  eventReq
}
