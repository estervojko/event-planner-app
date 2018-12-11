const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//import utilities for tokens
const jwt = require('jsonwebtoken');
const SECRET = "test token if it works";
const sign = (payload) => jwt.sign(payload, SECRET);

const {Event, User} = require('./models')

const { eventRouter } = require('./routes/event');
const { userRouter } = require('./routes/user');

const app = express();

const PORT = 3000;

app.use(bodyParser());
app.use(cors());
app.use(logger('dev'));

//test if server is set up
app.get('/', (req, res) => {
  res.json({res: "Event Planner app initiated"})
})

//test if hashing works
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    const { id, username} = user.dataValues;
    const token = sign({
      id,
      username
    });
    res.json({user, token});
  } catch(e) {
    console.log(e);
    res.status(500).json({msg: e.message});
  }
});

//steve
app.use('/events', eventRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
