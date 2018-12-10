const express = require('express');
const { Event } = require('../models');

const eventRouter = express.Router();

eventRouter.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json({
      events
    })
  } catch (e) {
    console.log('Server could not process request to GET events', e)
  }
})

module.exports = {
  eventRouter
}
