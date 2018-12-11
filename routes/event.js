const express = require('express');
const bodyParser = require('body-parser');
const { Event, User, Attendee } = require('../models');

const eventRouter = express.Router();
eventRouter.use(bodyParser.json());

//EVENT ONLY ROUTES

//GET all Events
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

//GET one Event
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

//POST Event
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

//DELETE Event
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

//UPDATE Event
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

//ATTENDEE ROUTES

//GET all users associated with event
eventRouter.get('/:id/users', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    const users = await event.getUsers();
    res.json({
      users
    })
  } catch (e) {
    console.log('Server could not process request to GET attendees', e);
    res.sendStatus(404);
  }
})

//GET one user associated with event
eventRouter.get('/:id/users/:userId', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    const user = await event.getUser(req.params.userId);
    res.json({
      user
    })
  } catch (e) {
    console.log('Server could not process request to GET attendee', e);
    res.sendStatus(404);
  }
})

//POST associate user with event
eventRouter.post('/:id/users/:userId', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    const user = await event.addUser(req.params.userId);
    res.json({
      user
    })
  } catch (e) {
    console.log('Server could not process request to POST attendee', e);
    res.sendStatus(404);
  }
})

//DELETE remove attendee from event
eventRouter.delete('/:id/users/:userId', async(req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    const user = await event.removeUser(req.params.userId);
    res.json({
      user
    })
  } catch (e) {
    console.log('Server could not process request to DELETE attendee', e);
    res.sendStatus(404);
  }
})

//PUT update attendee
eventRouter.put('/:id/users/:userId', async(req, res) => {
  try {
    const user = await Attendee.find({
      where:{
        event_id: req.params.id,
        user_id: req.params.userId
      }
    })
    user.update(req.body);
    res.json({
      user
    })
  } catch (e) {
    console.log('Server could not process request to UPDATE attendee', e);
    res.sendStatus(404);
  }
})

module.exports = {
  eventRouter
}
