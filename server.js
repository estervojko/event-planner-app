const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//import utilities for tokens
const jwt = require('jsonwebtoken');
const SECRET = "test token if it works";
const sign = (payload) => jwt.sign(payload, SECRET);

//utilities for passport
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const passport = require('passport');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

passport.use(new JwtStrategy(opts, async (payload, done) => {
  try {
    const user = await User.findByPk(payload.id);
    return done(null, user);
  } catch(e) {
    return done(e, false);
  }
}));


//server
const {Event, User} = require('./models')

const { eventRouter } = require('./routes/event');

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

//test if passport works
app.get('/events', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try{
    const events = await Event.findAll()
    res.json(events)
  }
  catch(e){
    res.status(500).json({
      msg: e.message
    })
  }
});

//steve
//app.use('/events', eventRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

module.exports = {
  passport,
  sign
};
