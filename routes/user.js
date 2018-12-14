const express = require('express');
const bodyParser = require('body-parser');
const {User, Event} = require('../models');
const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password']
      }
    });
    res.json({users})
  } catch (e) {
    console.log('Server could not process request to GET users', e)
    res.sendStatus(404);
  }
})

userRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: {
        exclude:
        ['password']
      },
      include: {
        model: Event,
      }
    });
    res.json({user})
  } catch (e) {
    console.log('Server could not process request to GET user', e)
    res.sendStatus(404);
  }
})

userRouter.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.json({user})
  } catch (e) {
    console.log('Server could not process request to DELETE user', e)
    res.sendStatus(404);
  }
})

userRouter.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    const updatedUser = await User.findByPk(req.params.id);
    res.json({updatedUser})
  } catch (e) {
    res.status(404).json({e: 'Server could not process request to UPDATE user - User may not exist'});
  }
})

module.exports = {
  userRouter
}
