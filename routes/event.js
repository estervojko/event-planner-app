const express = require('express');
const bodyParser = require('body-parser');
const { Event, User } = require('../models');

const eventRouter = express.Router();
eventRouter.use(bodyParser.json());

//EVENT ONLY ROUTES
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

eventRouter.delete('/:id', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    await event.destroy();
    res.json({
      event
    })
  } catch (e) {
    console.log('Server could not process request to DELETE event', e)
    res.sendStatus(404);
  }
})

eventRouter.put('/:id', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    await event.update(req.body);
    const updatedEvent = await Event.findByPk(req.params.id);
    res.json({
      updatedEvent
    })
  } catch (e) {
    console.log('Server could not process request to UPDATE event', e)
    res.sendStatus(404);
  }
})

//EVENT USER ROUTES
eventRouter.get('/:id/users', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    const users = await event.getUsers();
    res.json({
      users
    })
  } catch (e) {
    console.log('Server could not process request to UPDATE event', e);
    res.sendStatus(404);
  }
})

module.exports = {
  eventRouter
}
