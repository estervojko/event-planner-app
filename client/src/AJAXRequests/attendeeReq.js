const axios = require('axios');
const moment = require('moment');

const BASE_URL = 'http://localhost:3000/';
const EVENTS = 'events/'
const USERS = '/users/';

const attendeeReq = {

  getAttendees: async function(event_id) {
    try {
      const resp = await axios.get(BASE_URL + EVENTS + event_id + USERS);
      const attendees = resp.data;
      return attendees;
    } catch (e) {
      console.log("Axios - Attendee req - failed to GET ALL attendees ", e.message);
    }
  },

  getAttendee: async function(event_id, user_id) {
    try {
      const resp = await axios.get(BASE_URL + EVENTS + event_id + USERS + user_id);
      const attendee = resp.data;
      return attendee;
    } catch (e) {
      console.log("Axios - Attendee req - failed to GET ONE attendee ", e.message);
    }
  },

  postAttendee: async function(event_id, user_id, data, TOKEN) {
    try {
      const resp = await axios({
        method: 'post',
        url: BASE_URL + EVENTS + event_id + USERS + user_id,
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        },
        data: data
      });
      const attendee = resp.data.updatedEvent;
      return attendee;
    } catch (e) {
      console.log("Axios - Attendee req - failed to POST attendee ", e.message);
    }
  },

  deleteAttendee: async function(event_id, user_id, TOKEN) {
    try {
      const resp = await axios({
        method: 'delete',
        url: BASE_URL + EVENTS + event_id + USERS + user_id,
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      });
      const attendee = resp.data.updatedEvent;
      return attendee;
    } catch (e) {
      console.log("Axios - Attendee req - failed to DELETE attendee ", e.message);
    }
  },

  putAttendee: async function(event_id, user_id, data, TOKEN) {
    try {
      const resp = await axios({
        method: 'put',
        url: BASE_URL + EVENTS + event_id + USERS + user_id,
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        },
        data: data
      });
      const attendee = resp.data;
      return attendee;
    } catch (e) {
      console.log("Axios - Attendee req - failed to PUT attendee ", e.message);
    }
  }
}

export {
  attendeeReq
}
