const express = require('express');
const bodyParser = require('body-parser');
const { Event } = require('../models');

const eventRouter = express.Router();
eventRouter.use(bodyParser.json());

eventRouter.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json({
      events
    })
  } catch (e) {
    console.log('Server could not process request to GET events', e)
    res.sendStatus(404);
  }
})

eventRouter.get('/:id', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    res.json({
      event
    })
  } catch (e) {
    console.log('Server could not process request to GET event', e)
    res.sendStatus(404);
  }
})

eventRouter.post('/', async(req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json({
      event
    })
  } catch (e) {
    console.log('Server could not process request to POST event', e)
    res.sendStatus(404);
  }
})

module.exports = {
  eventRouter
}
