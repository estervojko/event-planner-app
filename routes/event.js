const express = require('express');
const bodyParser = require('body-parser');
const {Event, User, Attendee} = require('../models');
const eventRouter = express.Router();
eventRouter.use(bodyParser.json());
const passport = require('../server.js');
const sign = require('../server.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

eventRouter.get('/', async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password']
          }
        }
      ]
    });
    res.json({events})
  } catch (e) {
    console.log('Server could not process request to GET events', e)
    res.sendStatus(404);
  }
})

eventRouter.get('/:id', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password']
          }
        }
      ]
    });
    res.json({event})
  } catch (e) {
    console.log('Server could not process request to GET event', e)
    res.sendStatus(404);
  }
})

eventRouter.post('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json({event})
  } catch (e) {
    console.log('Server could not process request to POST event', e)
    res.sendStatus(404);
  }
})

eventRouter.delete('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    await event.destroy();
    res.json({event})
  } catch (e) {
    console.log('Server could not process request to DELETE event', e)
    res.sendStatus(404);
  }
})

eventRouter.put('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    await event.update(req.body);
    const updatedEvent = await Event.findByPk(req.params.id);
    res.json({updatedEvent})
  } catch (e) {
    res.status(404).json({e: 'Server could not process request to UPDATE event - Event may not exist'});
  }
})

eventRouter.get('/:id/users', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    const users = await event.getUsers({
      attributes: {
        exclude: ['password']
      }
    });
    res.json({users})
  } catch (e) {
    res.status(404).json({e: 'Server could not process request to GET attendees - Event may not exist'});
  }
})

eventRouter.get('/:id/users/:userId', async (req, res) => {
  const event_id = req.params.id;
  const user_id = req.params.userId;
  try {
    const event = await Event.findByPk(event_id);
    const users = await event.getUsers({
      where: {
        id: user_id
      },
      attributes: {
        exclude: ['password']
      }
    });
    res.json({users})
  } catch (e) {
    res.status(500).json({e: e.message, a: 'Server could not process request to GET attendee - Event or User may not exist'});
  }
})

eventRouter.post('/:id/users/:userId', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const event_id = req.params.id;
  const user_id = req.params.userId;

  try {

    const alreadyAttending = async () => {
      try {
        const event = await Event.findByPk(event_id);
        const attendeePresent = await event.hasUser(user_id);
        return attendeePresent;
      } catch (e) {
        res.status(500).json({e: e.message})
      }
    };

    const isAlreadyAttending = await alreadyAttending();

    if (!isAlreadyAttending) {
      const attendee = await Attendee.create({
        event_id: event_id,
        user_id: user_id,
        ...req.body
      })
      const updatedEvent = await Event.findByPk(req.params.id, {
        include: {
          model: User,
          attributes: {
            exclude: ['password']
          }
        }
      });
      res.json({updatedEvent})
    } else {
      res.json({msg: "User already associated with event - use PUT instead"})
    }
  } catch (e) {
    console.log('Server could not process request to POST attendee', e);
    res.sendStatus(404);
  }
})

eventRouter.delete('/:id/users/:userId', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const event_id = req.params.id;
  const user_id = req.params.userId;

  try {

    const alreadyRemoved = async () => {
      try {
        const event = await Event.findByPk(event_id);
        const attendeePresent = await event.hasUser(user_id);
        return !attendeePresent;
      } catch (e) {
        res.status(500).json({e: e.message})
      }
    };

    const isAlreadyRemoved = await alreadyRemoved();

    if (!isAlreadyRemoved) {
      const event = await Event.findByPk(req.params.id);
      const attendee = await event.removeUser(user_id);
      const updatedEvent = await Event.findByPk(req.params.id, {
        include: {
          model: User,
          attributes: {
            exclude: ['password']
          }
        }
      });
      res.json({updatedEvent})
    } else {
      res.json({msg: "User already removed or not present in event"})
    }
  } catch (e) {
    console.log('Server could not process request to DELETE attendee', e);
    res.sendStatus(404);
  }
})

eventRouter.put('/:id/users/:userId', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const user = await Attendee.find({
      where: {
        event_id: req.params.id,
        user_id: req.params.userId
      }
    })
    await user.update(req.body);
    const updatedEvent = await Event.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: {
          exclude: ['password']
        }
      }
    });
    res.json({updatedUser: user, updatedEvent})
  } catch (e) {
    res.status(404).json({e: 'Server could not process request to UPDATE attendee - Event or User may not exist'});
  }
})

module.exports = {
  eventRouter
}
