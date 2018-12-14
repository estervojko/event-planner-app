const axios = require('axios');

const BASE_URL = 'http://localhost:3000/';
const USERS = 'users/';
const REGISTER = 'register';

const userReq = {

  getUsers: async function() {
    try {
      const resp = await axios.get(BASE_URL + USERS);
      const users = resp.data.users;
      return users;
    } catch (e) {
      console.log("Axios - User req - failed to GET ALL users ", e.message);
    }
  },

  getUser: async function(id) {
    try {
      const resp = await axios.get(BASE_URL + USERS + id);
      const user = resp.data.user;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to GET ONE user ", e.message);
    }
  },

  postUser: async function(data) {
    try {
      const resp = await axios.post(BASE_URL + REGISTER, data);
      const user = resp.data;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to POST user ", e.message);
    }
  },

  deleteUser: async function(id) {
    try {
      const resp = await axios.delete(BASE_URL + USERS + id);
      const user = resp.data.user;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to DELETE user ", e.message);
    }
  },

  putUser: async function(id, data) {
    try {
      const resp = await axios.put(BASE_URL + USERS + id, data);
      const user = resp.data.updatedUser;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to PUT user ", e.message);
    }
  }
}

export {
  userReq
}
