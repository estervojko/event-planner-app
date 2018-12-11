const axios = require('axios');
const moment = require('moment');

const BASE_URL = 'http://localhost:3000/';
const USERS = 'users/';

const userReq = {

  getUsers: async function (){
    try {
      const resp = await axios.get(BASE_URL + USERS);
      const users = resp.data.users;
      return users;
    } catch (e) {
      console.log("Axios - User req - failed to GET ALL users ", e.message);
    }
  },

  getUser: async function (id){
    try {
      const resp = await axios.get(BASE_URL + USERS + id);
      const user = resp.data.user;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to GET ONE user ", e.message);
    }
  },

  postUser: async function (data){
    try {
      const resp = await axios.post(BASE_URL + USERS, data);
      const user = resp.data.user;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to POST user ", e.message);
    }
  },

  deleteUser: async function (id) {
    try {
      const resp = await axios.delete(BASE_URL + USERS + id);
      const user = resp.data.user;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to POST user ", e.message);
    }
  },

  putUser: async function (id, data) {
    try {
      const resp = await axios.put(BASE_URL + USERS + id, data);
      const user = resp.data.updatedUser;
      return user;
    } catch (e) {
      console.log("Axios - User req - failed to PUT user ", e.message);
    }
  }
}

// async function test(){
//   const data = {
//     username: 'steve20pro',
//     first_name: 'Steve',
//     last_name: 'Rodriguez',
//     address: '123 Main st.'
//   }
//   const resp = await userReq.putUser(3, data);
//   console.log(resp);
// }
//
// test();

module.exports = {
  userReq
}
